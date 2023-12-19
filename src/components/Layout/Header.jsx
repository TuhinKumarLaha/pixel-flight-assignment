import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import { ShoppingCart, ExitToApp } from "@mui/icons-material";

const Header = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };

  const handleCart = () => {
    // Implement your cart logic here
    console.log("Cart clicked");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>

        <IconButton color="inherit" onClick={handleCart}>
          <Badge badgeContent={3} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        <Button
          color="inherit"
          onClick={handleLogout}
          startIcon={<ExitToApp />}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
