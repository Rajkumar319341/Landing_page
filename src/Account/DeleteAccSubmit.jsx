import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography, Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const DeleteAccSubmit = () => {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://utilities-shikshakpro.care4edu.com/c4e/delete-reasons', {
          method: 'GET',
          headers: {
            'Authorization': 'Basic ' + btoa('c4econsumer:7A2Q5W4S6E8D9R0T1Y3U2I5O4P6L8K9'),
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setReasons(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div>
        <Grid item xs={12} sm={6}>
        <h3>Close Your ShikshakPro Account</h3>
        <h4>We will miss you a lot. Let us know why you are leaving us...</h4>
        </Grid>
       
        <Typography>Reasons for Closing your Account *</Typography>
        <Grid container spacing={1}>
          {reasons.map(reason => (
            <Grid item xs={12} sm={6} key={reason.id}>
              <FormControlLabel
                label={reason.reason}
                control={<Checkbox style={{ borderRadius: '50%' }} />} 
              />
            </Grid>
          ))}
        </Grid>
        <br />
        <Typography>Your feedback is important to us. Could you spare 2 minutes to give a detailed feedback on ShikshakPro</Typography>
        <br />
        <TextField id='feedback' name='feedback' fullWidth multiline rows={4} required />
        <br />
        <br />
        <Link to='/delete-account'>
          <Button variant='contained' color='primary'>Submit</Button>
        </Link>
      </div>
    </Container>
  );
};
