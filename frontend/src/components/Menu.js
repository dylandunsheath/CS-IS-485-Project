import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "background.default",
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          marginBottom: "20px",
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        Welcome to the Cybersecurity Quiz
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: "18px",
          marginBottom: "40px",
          maxWidth: "600px",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        Test your cybersecurity awareness and learn how to stay safe online!
      </Typography>
      <Button
        onClick={handleStart}
        variant="contained"
        color="primary"
        sx={{
          padding: "12px 24px",
          fontSize: "18px",
          fontWeight: "bold",
          boxShadow: 3,
          animation: "bounce 1s infinite",
          "&:hover": {
            backgroundColor: "primary.dark",
            transform: "scale(1.05)",
            boxShadow: 6,
          },
        }}
      >
        Start Quiz
      </Button>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default MenuPage;
