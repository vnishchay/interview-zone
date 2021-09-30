import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link} from 'react-router-dom';
import {v4} from 'uuid'
import { AppBar, IconButton, Toolbar } from '@material-ui/core';



export default function HomePage() {



  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar> 
        <Toolbar>
          <IconButton size="small" edge="start" color="grey" sx={{mr:2}}> 
          
          </IconButton>
        </Toolbar>
        </AppBar> 
      <main>

        <div >
          <Container maxWidth="xl" style={{margin: 'auto', padding: '15%', justifyContent:'center'} }>
            <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
                   Let's do it !   
            </Typography>
            <div >
              <Grid container spacing={2} justifyContent="center">        

                  <Link  to = {`/interview/${v4()}`} > 
                      <Button variant="contained" color="primary" style={{padding: '3%'}}>
                  Go to interview
                  </Button>
                   </Link> 
                 </Grid>
            </div>
          </Container>
        </div>
        <Container  maxWidth="md">      
        </Container>
      </main>

    </React.Fragment>
  );
}