// src/components/Newsletter.jsx
import React from "react";
import { Container, Grid, TextField, Button, Typography, Box } from "@mui/material";

const Newsletter = () => {
  return (
    <Box sx={{ bgcolor: "grey.100", py: 6, mt: 5 }}>
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          
          {/* Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Get the latest updates on new arrivals and exclusive offers.
            </Typography>
          </Grid>

          {/* Email Input + Button */}
          <Grid item xs={12} md={6}>
            <Box display="flex" gap={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Newsletter;
