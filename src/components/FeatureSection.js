import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

function FeatureSection() {
  return (
    <Container id="feature-section" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box
              sx={{
                mb: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
              }}
            >
              <img
                src="https://images.pexels.com/photos/90368/pexels-photo-90368.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Feature One"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Feature One
            </Typography>
            <Typography component="p">
              Description of feature one.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box
              sx={{
                mb: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
              }}
            >
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Feature Two"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Feature Two
            </Typography>
            <Typography component="p">
              Description of feature two.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box
              sx={{
                mb: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '200px',
              }}
            >
              <img
                src="https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Feature Three"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Typography variant="h6" component="h3" gutterBottom>
              Feature Three
            </Typography>
            <Typography component="p">
              Description of feature three.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FeatureSection;
