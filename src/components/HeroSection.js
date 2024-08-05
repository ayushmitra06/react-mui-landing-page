import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import backgroundImage from '../assets/camera-1.jpg';

function HeroSection() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <Container 
        maxWidth="md"
        sx={{
          textAlign: 'left',
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#fff', 
            fontFamily: 'Montserrat, sans-serif', 
          }}
        >
          Welcome to Our Landing Page
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          gutterBottom
          sx={{
            fontWeight: 600,
            color: '#fff', 
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          Discover amazing features and join us today.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;
