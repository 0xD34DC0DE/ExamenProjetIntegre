import { Button, Grid, Paper, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Dummy from './Dummy';

function Component1() {
  const [dummies, setDummies] = useState([]);

  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({
    id: null,
    name: '',
    description: '',
    count: 0
  });

  const handleClose = (_, reason) => {
    if (reason === "backdropClick") {
      setFormVisible(false);
    }
  };

  const handleFormChange = (event) => {
    setForm((form) => ({
      ...form,
      [event.target.id || event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const getDummy = async () => {
      const dummyFromServer = await fetchDummies();
      setDummies(dummyFromServer);
    }
    getDummy()
  }, [])

  const fetchDummies = async () => {
    const res = await fetch('http://localhost:8080/dummy');
    const data = await res.json();
    return data;
  }

  const deleteDummy = async (id) => {
    await fetch(`http://localhost:8080/dummy/${id}`, {
      method: 'DELETE'
    })
    setDummies(dummies.filter((dummy) => dummy.id !== id))
  }

  const updateDummy = async (dummy) => {
    const res = await fetch(`http://localhost:8080/dummy`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(dummy)
      });
    const data = await res.json();

    setDummies(
      dummies.map((dummy) => dummy.id === data.id ? data : dummy)
    );
  }

  const createDummy = async (dummy) => {
    const res = await fetch(`http://localhost:8080/dummy`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(dummy)
      });
    const data = await res.json();
    console.log(JSON.stringify(data));
    setDummies([...dummies, data]);
  }

  const onSubmit = (dummy) => {
    if (dummy.id !== null) {
      updateDummy(dummy);
      setFormVisible(false);
    } else {
      createDummy(dummy);
      setFormVisible(false);
    }
  }

  return (
    <>
      <Grid item sx={{ textAlign: 'center' }} xs={12}>
        <Button variant="contained" color="success" onClick={() => { setForm({ id: null, name: '', description: '', count: '' }); setFormVisible(true) }}>Add</Button>
      </Grid>
      {
        dummies.map((dummy, i) => {
          return (
            <Grid item container key={i} sx={{ mt: 3 }}>
              <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
                <Grid container direction="row">

                  <Grid item xs={10}>
                    <Dummy {...dummy} />
                  </Grid>

                  <Grid item xs={2}>
                    <Grid item container direction="column" justifyItems="left" spacing={2}>

                      <Grid item xs={2}>
                        <Button variant="contained" color="error" onClick={() => deleteDummy(dummy.id)}>delete</Button>
                      </Grid>

                      <Grid item xs={2}>
                        <Button variant="contained" color="warning" onClick={() => { setForm(dummy); setFormVisible(true); }}>edit</Button>
                      </Grid>

                    </Grid>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>)
        })
      }

      <Dialog open={formVisible} onClose={handleClose}>

        {form.id === null && <DialogTitle>Ajouter un dummy</DialogTitle>}
        {form.id && <DialogTitle>Modifer un dummy</DialogTitle>}

        <DialogContent sx={{ minWidth: "md" }}>
          <TextField
            id="name"
            fullWidth
            variant="standard"
            type="text"
            onChange={handleFormChange}
            value={form.name}
            label="name"
          />

          <TextField
            id="description"
            fullWidth
            variant="standard"
            type="text"
            onChange={handleFormChange}
            value={form.description}
            label="description"

          />

          <TextField
            id="count"
            fullWidth
            variant="standard"
            type="number"
            onChange={handleFormChange}
            value={form.count}
            label="count"
          />

          <Button onClick={() => { onSubmit(form) }}>{form.id === null ? 'Envoyer' : 'Modifier'}</Button>
        </DialogContent>

      </Dialog>
    </>
  )
}

export default Component1
