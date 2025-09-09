// src/components/Newsletter.jsx
import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography, Box, Alert } from "@mui/material";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    setError("");
    setSuccess("");

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("🎉 Thanks for subscribing! Check your inbox.");
      setEmail("");
    }, 1500);
  };

  return (
    <Box
      sx={{
        bgcolor: "grey.100",
        py: 8,
        mt: 5,
        background: "linear-gradient(135deg, #e3f2fd 0%, #f9f9f9 100%)",
      }}
    >
      <Container>
        <Grid container spacing={6} columns={12} alignItems="center" justifyContent="center">
          {/* Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Get the latest updates on new arrivals, exclusive offers, and more!
            </Typography>
          </Grid>

          {/* Email Input + Button */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!error}
                helperText={error}
                sx={{ bgcolor: "white", borderRadius: "8px" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubscribe}
                disabled={loading}
                sx={{
                  px: 4,
                  borderRadius: "30px",
                  fontWeight: "bold",
                  textTransform: "none",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </Box>

            {success && (
              <Alert severity="success" sx={{ mt: 2, borderRadius: "8px" }}>
                {success}
              </Alert>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Newsletter;
