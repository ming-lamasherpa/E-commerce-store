// src/components/Footer.jsx
import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 5, mt: 5 }}>
      <Container>
        <Grid container spacing={4}>
          
          {/* Brand Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Sherpa Shop
            </Typography>
            <Typography variant="body2">
              Authentic Sherpa clothing, made with love and tradition from the Himalayas.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">Home</Link>
            <Link href="/products" color="inherit" underline="hover" display="block">Products</Link>
            <Link href="/cart" color="inherit" underline="hover" display="block">Cart</Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">📍 Kathmandu, Nepal</Typography>
            <Typography variant="body2">📞 +977-9800000000</Typography>
            <Typography variant="body2">✉️ info@sherpashop.com</Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4} borderTop="1px solid rgba(255,255,255,0.2)" pt={2}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Sherpa Shop. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
