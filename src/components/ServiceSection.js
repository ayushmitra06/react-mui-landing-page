import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import {DesignServices, CameraAlt, VideoCameraFront, SixtyFps, VoiceChat } from '@mui/icons-material'; // Import icons

function ServiceSection() {
  return (
    <Container id="service-section" maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <SixtyFps fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Service One
              </Typography>
              <Typography component="p">
                Description of service one.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <DesignServices fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Service Two
              </Typography>
              <Typography component="p">
                Description of service two.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <CameraAlt fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Service Two
              </Typography>
              <Typography component="p">
                Description of service two.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <VideoCameraFront fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Service Four
              </Typography>
              <Typography component="p">
                Description of service three.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 2 }}>
              <VoiceChat fontSize="large" />
            </Box>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                Service Six
              </Typography>
              <Typography component="p">
                Description of service three.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ServiceSection;
