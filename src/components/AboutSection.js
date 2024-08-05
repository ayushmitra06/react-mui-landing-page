import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

function AboutSection() {
  return (
    <Container id="about-section" maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography component="p">
            Our company is dedicated to providing top-notch services. Learn more about our journey and team.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut felis dictum ultricies.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{ width: '100%', height: '100%', maxWidth: 600 }}
            alt="About us"
            src="https://images.pexels.com/photos/828380/pexels-photo-828380.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutSection;
