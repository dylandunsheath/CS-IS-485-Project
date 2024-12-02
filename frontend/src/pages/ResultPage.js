import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuizProgress, clearQuizProgress } from "../utils/localStorage";
import "../styles/ResultPage.css";
import { Divider, Paper } from "@mui/material";

const ResultPage = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const progress = getQuizProgress();

  // Fetch questions from JSON file
  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        const allQuestions = data.flatMap((section) =>
          section.questions.map((q) => ({
            ...q,
            section: section.section,
          }))
        );
        setQuestions(allQuestions);
      });
  }, []);

  // Calculate total risk score
  const totalRiskScore = questions.reduce((total, question, index) => {
    const response = progress.responses[index];
    if (!response) return total; // Skip unanswered questions
    const chosenOption = question.options.find(
      (option) => option.text === response.answer
    );
    return total + (chosenOption ? chosenOption.points : 0);
  }, 0);

  const handleRestart = () => {
    clearQuizProgress();
    navigate("/");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Quiz Results</h1>
      <h3>Lower is Better</h3>
      <h2 className="risk-score">Total Risk Score: {totalRiskScore}</h2>
      <div className="result-question-review">
        {questions.map((question, index) => {
          const response = progress.responses[index];
          if (!response) return null; // Skip unanswered questions

          const chosenOption = question.options.find(
            (option) => option.text === response.answer
          );
          const isCorrect = chosenOption && chosenOption.points === 0;

          return (
            <Paper
              key={index}
              className={`result-item ${isCorrect ? "correct" : "incorrect"}`}
            >
              <h5>
                Question {index + 1}
              <br/>
              {question.text}
              </h5>
              <Divider/>
              <p className="your-answer">
                <strong>Your Answer:</strong> {response.answer}
              </p>
              {isCorrect ? (
                <p className="correct">
                  <strong>Correct!</strong>
                </p>
              ) : (
                <div className="correct-answer">
                  <p>
                    <strong>Correct Answer:</strong>{" "}
                    {
                      question.options.find((option) => option.points === 0)
                        ?.text
                    }
                  </p>
                  <p>
                    <strong>Points Added:</strong> {chosenOption?.points || 0}
                  </p>
                  <Paper className="explanation-container">
                    <strong>Explanation:</strong> <div className="question-explanation"> {question.explanation} </div>
                  </Paper>
                </div>
              )}
            </Paper>
          );
        })}
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
