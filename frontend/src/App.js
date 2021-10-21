import { Route, useHistory  } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import { Container, Grid, Typography } from '@mui/material';
import NavigationButton from './components/NavigationButton';

function App() {
  let history = useHistory();

  return (
      <Container maxWidth="lg" sx={{ mt: 10, width: "100%" }}>
        <Grid container alignItems="center">

          <Grid item xs={12} sx={{mb: 3, textAlign: 'center'}}>
            <Typography type="title" variant="h4">Examen</Typography>
          </Grid>

          <Grid item xs={6} alignItems="center" sx={{textAlign: 'center'}}>
            <NavigationButton url='/page1' text='page1' history={history}/>
          </Grid>

          <Grid item xs={6} alignItems="center" sx={{textAlign: 'center'}}>
            <NavigationButton url='/page2' text='page2' history={history}/>
          </Grid>

          <Route path="/page1" exact component={Component1}/>
          <Route path="/page2" exact component={Component2}/>

        </Grid>
      </Container>
  );
}

export default App;
