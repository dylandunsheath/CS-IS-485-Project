import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography, Paper } from "@mui/material";

const MenuPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-100px",
        backgroundColor: "black", // Dark theme background
        color: "white", // Light text color for contrast
        padding: "20px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "900px",
          width: "100%",
          padding: "40px",
          backgroundColor: "#1a1a1a", // Dark gray for container
          textAlign: "center",
          borderRadius: "16px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#00bcd4", // Accent color (cyan)
            marginBottom: "20px",
          }}
        >
          Welcome to the Cybersecurity Quiz
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#ccc", // Slightly lighter gray for description text
            marginBottom: "30px",
          }}
        >
          Test your cybersecurity awareness and learn how to stay safe online!
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#004d79", // Navy blue button
            color: "white",
            "&:hover": {
              backgroundColor: "#007bb5", // Lighter blue on hover
            },
          }}
          onClick={handleStart}
        >
          Start Quiz
        </Button>
      </Paper>
    </Box>
  );
};

export default MenuPage;
