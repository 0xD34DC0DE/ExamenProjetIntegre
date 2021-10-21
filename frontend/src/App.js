import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Attempts from './components/Attempts';

function App() {
  const [form, setForm] = useState({ name: '', guess: '' });
  const [lastTry, setLastTry] = useState(null);
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    const getAttempts = async () => {
      const attemptsFromServer = await fetchAttempts();
      setAttempts(attemptsFromServer);
    }
    getAttempts();
  }, []);

  const fetchAttempts = async () => {
    const res = await fetch('http://localhost:8080/attempt');
    const data = await res.json();
    return data;
  };

  const sendAttempt = async (attempt) => {
    const res = await fetch('http://localhost:8080/attempt', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ ...attempt, id: null, randomNumber: null })
    });
    const data = await res.json();

    setAttempts([...attempts, data]);
    setLastTry(data);
  };

  const handleFormChange = (event) => {
    setForm((form) => ({
      ...form,
      [event.target.id || event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if(form.name == '')
    {
      alert("S'il-vous plait, veuillez spécifier un nom");
      return;
    }

    let guessNumber = parseInt(form.guess);
    if(isNaN(guessNumber) || guessNumber < 1 || guessNumber > 6) {
      alert("S'il-vous plait, veuillez spécifier nombre entre 1 et 6");
      return;
    }

    sendAttempt(form);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 10, width: "100%" }}>
      <Grid container alignItems="center">

        <Grid item xs={12} sx={{ mb: 3, textAlign: 'center' }}>
          <Typography type="title" variant="h4">Examen Intra</Typography>
        </Grid>

        <Grid item xs={12} alignItems="center" sx={{ textAlign: 'center', mt: 2 }}>
          <TextField id="name" label="Nom" variant="standard" onChange={handleFormChange}></TextField>
        </Grid>

        <Grid item xs={12} alignItems="center" sx={{ textAlign: 'center', mt: 2 }}>
          <TextField id="guess" label="Guess" type="number" variant="standard" onChange={handleFormChange}></TextField>
        </Grid>

        <Grid item xs={12} alignItems="center" sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" onClick={handleSubmit}>Coup de dé</Button>
        </Grid>

        <Grid item xs={12} alignItems="center" sx={{ textAlign: 'center', mt: 6, mb: 2 }}>
          <Typography variant="h4">{lastTry && lastTry.guess}</Typography>
          <Typography variant="h4">
            {
              lastTry && (lastTry.guess === lastTry.randomNumber ? "Réussi" : "Manqué")
            }
          </Typography>
        </Grid>

        <Grid item xs={12} alignItems="center" sx={{ textAlign: 'center', mt: 4 }}>
          <Attempts attempts={attempts} />
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
