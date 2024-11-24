import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the Cybersecurity Quiz</h1>
      <p>Test your cybersecurity awareness and learn how to stay safe online!</p>
      <button
        style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
        onClick={handleStart}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MenuPage;
