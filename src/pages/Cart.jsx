import React from "react";
import { Typography, Grid, Card, CardContent, Button, Box } from "@mui/material";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) return <Typography textAlign="center" variant="h5">Your cart is empty</Typography>;

  return (
    <Box>
      <Typography variant="h4" textAlign="center" gutterBottom>Your Shopping Cart</Typography>
      <Grid container spacing={3} justifyContent="center">
        {cartItems.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>${item.price} x {item.quantity}</Typography>
                <Button sx={{ mt: 1 }} variant="outlined" color="secondary" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box textAlign="center" mt={4}>
        <Button variant="contained" color="error" onClick={clearCart}>Clear Cart</Button>
      </Box>
    </Box>
  );
};

export default Cart;
