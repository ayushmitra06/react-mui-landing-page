import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

function GallerySection() {
  return (
    <Container id="gallery-section" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="img"
            sx={{ width: '100%', height: 'auto' }}
            alt="Gallery image 1"
            src="https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="img"
            sx={{ width: '100%', height: 'auto' }}
            alt="Gallery image 2"
            src="https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component="img"
            sx={{ width: '100%', height: 'auto' }}
            alt="Gallery image 3"
            src="https://images.pexels.com/photos/935791/pexels-photo-935791.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default GallerySection;
