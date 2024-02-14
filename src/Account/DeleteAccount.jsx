import React from 'react';
import { Grid, TextField, Typography, Button,Link } from '@mui/material';

const Delete_Account = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Typography variant="h6" align="center">
          Are You Sure..?
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">
          Please Enter Your Password to Continue:
        </Typography>
      </Grid>
      <Grid item>
        <TextField
        fullWidth
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          required
        />
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center">
          If you don't remember your password, Generate OTP
        </Typography>
      </Grid>
      <br></br>
      <Link to='/delete-account-submit'>
      <Grid item>
        <Button variant="contained" color="primary">
          Delete Account
        </Button>
      </Grid>
      </Link>
      
    </Grid>
  );
};

export default Delete_Account;
