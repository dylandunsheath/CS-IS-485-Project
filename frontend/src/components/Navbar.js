import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ showMenu, onMenuToggle }) => {
  return (
<AppBar
  position="sticky"
  sx={{
    backgroundColor: "background.default", // Match dark background
    borderRadius: "0", // Remove border-radius to eliminate corner white
    boxShadow: "none", // Optional: remove shadow for flat styling
  }}
>


      <Toolbar>
        {showMenu && (
          <IconButton
            edge="start"
            flexGrow="1"
            color="inherit"
            aria-label="menu"
            onClick={onMenuToggle}
            sx={{
              color: "#EAECEE",
              "&:hover": {
                backgroundColor: "#333333",
              },
              transition: "background-color 0.3s ease",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Cybersecurity Risk Tool
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
