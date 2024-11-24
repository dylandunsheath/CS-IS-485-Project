import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ showMenu, onMenuToggle }) => {
  return (
    <AppBar position="static">
      <Toolbar style={{"background": "black"}}>
        {showMenu && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Cybersecurity Risk Tool
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
