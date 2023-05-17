import React from 'react';
import './Sobre.css';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

function Sobre() {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      className="container"
    >
      <Box className="card">
        <form className="form">
          <Typography variant="h3" align="center" textTransform={'uppercase'} className="form-title" color='#fff'>
            Sobre
          </Typography>
          <Box className="form-input">
            
          </Box>
          <Box className="form-input">
            
          </Box>
         
        </form>
      </Box>
    </Grid>
  );
}

export default Sobre;