import React from 'react';
import { Container, Typography, Grid, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        py: 4,
        mt: 4,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: contact@example.com
            </Typography>
            <Typography variant="body2">
              Phone: +123 456 789
            </Typography>
            <Typography variant="body2">
              Address: 123 Main Street, City, Country
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
            </Typography>
            <Typography variant="body2">
              <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            </Typography>
            <Typography variant="body2">
              <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
            </Typography>
            <Typography variant="body2">
              <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" href="https://facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
