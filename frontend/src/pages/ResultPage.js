import React from "react";
import { useNavigate } from "react-router-dom";
import { getQuizProgress, clearQuizProgress } from "../utils/localStorage";
import "../styles/ResultPage.css";

const ResultPage = () => {
  const navigate = useNavigate();
  const progress = getQuizProgress();

  const handleRestart = () => {
    clearQuizProgress();
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Quiz Results</h1>
      <div>
        {Object.keys(progress.responses).map((key) => (
          <p key={key}>
            Question {parseInt(key) + 1}:{" "}
            {progress.responses[key].isCorrect ? "Correct" : "Incorrect"}
          </p>
        ))}
      </div>
      <button
        style={{ padding: "10px 20px", fontSize: "16px", marginTop: "20px" }}
        onClick={handleRestart}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default ResultPage;
