import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Sherpa Jacket", description: "Warm Himalayan jacket", price: 120, image: "/src/assets/images/jacket.png" },
  { id: 2, name: "Wool Sweater", description: "Handmade Sherpa sweater", price: 80, image: "/src/assets/images/shirt.png" },
];

const Home = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 4000 };

  return (
    <Box>
      {/* Hero Slider */}
      <Box mb={5}>
        <Slider {...settings}>
          <Box sx={{ position: "relative" }}>
            <img src="/src/assets/images/hero.png" alt="Hero" style={{ width: "100%", borderRadius: "8px" }} />
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", textAlign: "center" }}>
              <Typography variant="h2" fontWeight="bold">Sherpa Clothing Collection</Typography>
              <Typography variant="h4" mb={2}>Premium quality, warm, and stylish</Typography>
              <a href="/products" style={{ textDecoration: "none" }}>
                <Box component="button" sx={{ bgcolor: "secondary.main", color: "white", px: 3, py: 1, border: "none", borderRadius: 1 }}>Shop Now</Box>
              </a>
            </Box>
          </Box>
        </Slider>
      </Box>

      {/* Featured Products */}
      <Typography variant="h4" fontWeight="bold" mb={3} textAlign="center">Our Trending Products</Typography>
      <Grid container spacing={4} justifyContent="center">
        {featuredProducts.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
