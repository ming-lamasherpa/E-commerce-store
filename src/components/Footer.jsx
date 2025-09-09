// src/components/Footer.jsx
import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", pt: 6, pb: 3, mt: 5 }}>
      <Container>
        <Grid container spacing={6} columns={12}>
          {/* Brand Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              SherpaMart
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "grey.400" }}>
              Authentic Sherpa clothing, made with love and tradition from the Himalayas.
            </Typography>

            <Box>
              <IconButton color="inherit" size="small" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" size="small" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" size="small" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" size="small" href="https://youtube.com" target="_blank">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            {["Home", "Products", "Cart", "About Us", "Contact"].map((link, i) => (
              <Link
                key={i}
                href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "")}`}
                color="inherit"
                underline="hover"
                display="block"
                sx={{
                  mb: 0.8,
                  "&:hover": { color: "secondary.main", pl: 0.5, transition: "0.3s" },
                }}
              >
                {link}
              </Link>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📍 Dharan, Nepal
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📞 +977-9802536689
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              ✉️ hello@sherpamart.com
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={5} borderTop="1px solid rgba(255,255,255,0.2)" pt={2}>
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © {new Date().getFullYear()} SherpaMart. All Rights Reserved. | Designed with ❤️ in Nepal
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
