import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/images/logo1.png"; 

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Fake authentication state (replace with real auth logic)
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AppBar position="sticky" sx={{ background: "black" }}>
      <Toolbar>
        {/* Logo + Brand Name */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="SherpaMart Logo"
            sx={{ height: 40, width: 40, mr: 1, borderRadius: "50%" }}
          />
          <Typography
            variant="h5"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            SherpaMart
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About Us</Button>
          <Button color="inherit" component={Link} to="/products">Our Products</Button>
          <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        </Box>

        {/* Cart + Auth */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Button color="inherit" onClick={handleAuth}>
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
