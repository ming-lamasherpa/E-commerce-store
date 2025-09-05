import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Sherpa Jacket", description: "Warm Himalayan jacket", price: 120, image: "/src/assets/images/jacket.png" },
  { id: 2, name: "Wool Sweater", description: "Handmade Sherpa sweater", price: 80, image: "src/assets/images/shirt.png" },
  { id: 3, name: "Hiking Pants", description: "Durable trekking pants", price: 95, image: "/src/assets/images/pant.png" },
  { id: 4, name: "Sherpa Hat", description: "Traditional wool hat", price: 25, image: "src/assets/images/hat.png" },
];

const Products = () => (
  <Container>
    <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">Our Products</Typography>
    <Grid container spacing={4} justifyContent="center">
      {products.map(p => (
        <Grid item xs={12} sm={6} md={4} key={p.id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Products;
