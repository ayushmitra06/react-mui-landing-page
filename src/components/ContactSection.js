import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function ContactSection() {
  return (
    <Container id="contact-section" maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          required
          type="email"
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ alignSelf: 'flex-start' }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default ContactSection;
