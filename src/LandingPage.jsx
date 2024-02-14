import React from 'react';
import { Grid, Typography, Box,  Slide, Button } from '@mui/material';
import Consultant from './Images/Consultant.png';
import Courses from './Images/courses.png';
import Tutors from './Images/Tutors.png';
import Webinar from './Images/webinar.png';
import { Link } from 'react-router-dom';
import './Landing_Page.css'

export const LandingPage = () => {
  return (
    <Box mt={4} mx="auto" maxWidth="1150px">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}  >
              <Slide direction="right" in={true} timeout={1000}>
                <img className='cons_img'src={Consultant} alt="Consultant" height="300px" style={{ borderRadius: '8px' }} />
              </Slide>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Slide direction="right" in={true} timeout={1000}>
                <Typography variant='h5' className='cons_typo'gutterBottom>Consultants</Typography>
              </Slide>
              <Slide direction="right" in={true} timeout={1000}>
                <Typography>
                  Tap into specialized insights with our expert consultants, tailored to your needs. Elevate your strategy and achieve your goals with personalized guidance. Let our seasoned consultants drive your business towards greater efficiency and success.
                </Typography>
              </Slide>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Slide direction="left" in={true} timeout={1000}>
                <img className='tutors_img'src={Tutors} alt="Tutors" height="300px" style={{ borderRadius: '8px' }} />
              </Slide>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Slide direction="left" in={true} timeout={1000}>
                <Typography variant='h5'  className='cons_typo' gutterBottom>Tutors For Hire</Typography>
              </Slide>
              <Slide direction="left" in={true} timeout={1000}>
                <Typography>
                  Tap into specialized insights with our expert consultants, tailored to your needs. Elevate your strategy and achieve your goals with personalized guidance. Let our seasoned consultants drive your business towards greater efficiency and success.
                </Typography>
              </Slide>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Slide direction="right" in={true} timeout={1000}>
                <img  className='courses_img'src={Courses} alt="Courses" height="300px" style={{ borderRadius: '8px' }} />
               
              </Slide>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Slide direction="right" in={true} timeout={1000}>
                <Typography variant='h5'  className='cons_typo'  gutterBottom>Courses</Typography>
              </Slide>
              <Slide direction="right" in={true} timeout={1000}>
                <Typography>
                  Tap into specialized insights with our expert consultants, tailored to your needs. Elevate your strategy and achieve your goals with personalized guidance. Let our seasoned consultants drive your business towards greater efficiency and success.
                </Typography>
              </Slide>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} >
            <Grid item xs={12} sm={6} >
              <Slide direction="left" in={true} timeout={1000}>
                <img className='webinar_img' src={Webinar} alt="Webinar" height="250px" width="330px" style={{ borderRadius: '8px' }} />
              </Slide>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Slide direction="left" in={true} timeout={1000}>
                <Typography variant='h5'   className='cons_typo' gutterBottom>Webinars</Typography>
              </Slide>
              <Slide direction="left" in={true} timeout={1000}>
                <Typography>
                  Tap into specialized insights with our expert consultants, tailored to your needs. Elevate your strategy and achieve your goals with personalized guidance. Let our seasoned consultants drive your business towards greater efficiency and success.
                </Typography>
              </Slide>
            </Grid>
          </Grid>
        </Grid>
        <Link to='/delete-account-submit'>
        <Button> Click Here</Button>

        </Link>
      </Grid>
    </Box>
  );
};
