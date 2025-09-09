import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ShoppingCart, Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/images/logo1.png";

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();

  // Fake authentication state (replace with real auth logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
  ];

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
          <Typography variant="h5" sx={{ color: "white", fontWeight: "bold" }}>
            SherpaMart
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              color="inherit"
              component={Link}
              to={link.path}
              sx={{
                fontWeight: location.pathname === link.path ? "bold" : "normal",
                borderBottom:
                  location.pathname === link.path ? "2px solid #fff" : "none",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {link.label}
            </Button>
          ))}
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

        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
          onClick={toggleDrawer}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250, bgcolor: "black", height: "100%", color: "white" }}
          role="presentation"
          onClick={toggleDrawer}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  py: 2,
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  fontWeight: location.pathname === link.path ? "bold" : "normal",
                }}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
