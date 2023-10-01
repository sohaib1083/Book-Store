
import './App.css';
import { Button, Grid, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import { getMatches } from './api/Api';
import { Fragment, useEffect, useState } from 'react';

function App() {

  const [matches, setMatches] = useState([]);


  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.data)
        console.log(data.data);
      })

      .catch();
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Typography variant='h3' style={{marginTop:20}}>Welcome To Sohaib's Cricket Mania</Typography>
      <Grid container>
        <Grid sm="2">

        </Grid>
        <Grid sm="8">
          {
            matches.map((data) => (
            <Fragment>
              <MyCard key={data.id} data={data} />
            </Fragment>
            ))
          }
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
