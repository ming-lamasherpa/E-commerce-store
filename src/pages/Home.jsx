import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Sherpa Jacket", description: "Warm Himalayan jacket", price: 120, image: "/src/assets/images/jacket.png" },
  { id: 2, name: "Wool Sweater", description: "Handmade Sherpa sweater", price: 80, image: "/src/assets/images/shirt.png" },
];

const Home = () => {
  const settings = { 
    dots: true, 
    infinite: true, 
    speed: 800, 
    fade: true,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 4000 
  };

  return (
    <Box>
      {/* Hero Slider */}
      <Box mb={8}>
        <Slider {...settings}>
          <Box sx={{ position: "relative" }}>
            {/* Hero Image */}
            <img 
              src="/src/assets/images/hero.png" 
              alt="Hero" 
              style={{ width: "100%", maxHeight: "600px", objectFit: "cover", borderRadius: "8px" }} 
            />
            
            {/* Gradient Overlay */}
            <Box 
              sx={{ 
                position: "absolute", 
                top: 0, left: 0, right: 0, bottom: 0, 
                bgcolor: "rgba(0,0,0,0.45)", 
                borderRadius: "8px" 
              }} 
            />

            {/* Hero Text */}
            <Box 
              sx={{ 
                position: "absolute", 
                top: "50%", left: "50%", 
                transform: "translate(-50%, -50%)", 
                color: "white", 
                textAlign: "center", 
                px: 2 
              }}
            >
              <Typography 
                variant="h2" 
                fontWeight="bold" 
                sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
              >
                Sherpa Clothing Collection
              </Typography>
              <Typography 
                variant="h5" 
                mb={3} 
                sx={{ textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
              >
                Premium quality, warm, and stylish
              </Typography>
              <Button 
                href="/products" 
                variant="contained" 
                color="secondary"
                sx={{ 
                  px: 4, py: 1.5, fontSize: "1rem", 
                  borderRadius: "30px", 
                  textTransform: "none",
                  transition: "0.3s",
                  "&:hover": { bgcolor: "secondary.dark", transform: "scale(1.05)" }
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Slider>
      </Box>

      {/* Featured Products */}
      <Box sx={{ py: 6, bgcolor: "#f9f9f9" }}>
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          mb={5} 
          textAlign="center"
        >
          Our Trending Products
        </Typography>

 <Grid container spacing={4} columns={12} justifyContent="center">
  {featuredProducts.map((p) => (
    <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
      <ProductCard product={p} />
    </Grid>
  ))}
</Grid>


      </Box>
    </Box>
  );
};

export default Home;
