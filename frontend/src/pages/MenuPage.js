import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MenuPage.css";
import { Button, ThemeProvider } from "@mui/material";
import { appTheme } from "../utils/appTheme";

const MenuPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className="menu-page" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Cybersecurity Quiz</h1>
      <p>Test your cybersecurity awareness and learn how to stay safe online!</p>
      <ThemeProvider theme={appTheme}>
      <Button
        className="start-button"
        onClick={handleStart}
      >
      Start Quiz
      </Button>
      </ThemeProvider>
    </div>
  );
};

export default MenuPage;
