import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuizProgress, clearQuizProgress } from "../utils/localStorage";
import { Divider, Paper, Box, Typography, Button, LinearProgress } from "@mui/material";

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

  const getStatusColor = () => {
    if (totalRiskScore <= 5) return "success.main"; // Very Safe
    if (totalRiskScore <= 9) return "info.main"; // Safe
    if (totalRiskScore <= 15) return "warning.main"; // Needs Improvement
    return "error.main"; // Risky
  };

  const getStatusLabel = () => {
    if (totalRiskScore <= 5) return "Very Safe";
    if (totalRiskScore <= 9) return "Safe";
    if (totalRiskScore <= 15) return "Needs Improvement";
    return "Risky";
  };

  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "background.default", // Use dark theme background
        color: "text.primary",
        gap: "20px",
        minHeight: "100vh",
        maxWidth: "100%", // Extend background for full width
        margin: "0 auto",
      }}
    >

      <Typography variant="h4" sx={{ marginBottom: "10px", fontWeight: "bold" }}>
        Quiz Results
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "20px", color: "text.secondary" }}>
        Lower is Better
      </Typography>
      <Typography
        variant="h3"
        className="risk-score"
        sx={{
          marginBottom: "10px",
          color: getStatusColor(),
          fontWeight: "bold",
        }}
      >
        Total Risk Score: {totalRiskScore}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(totalRiskScore / 20) * 100}
        sx={{
          height: "10px",
          borderRadius: "5px",
          backgroundColor: "background.paper",
          "& .MuiLinearProgress-bar": {
            backgroundColor: getStatusColor(),
          },
          marginBottom: "20px",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          color: getStatusColor(),
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Status: {getStatusLabel()}
      </Typography>
      <Box className="result-question-review" >
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
              sx={{
                padding: "15px",
                backgroundColor: "grey.900", // Dark gray background
                color: isCorrect ? "success.main" : "error.main", // Text color for readability
                borderRadius: "8px",
                textAlign: "left",
                maxWidth: "900px",
                margin: "20px auto",
              }}
            >

              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Question {index + 1}: {question.text}
              </Typography>
              <Divider sx={{ marginY: "10px" }} />
              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Your Answer:</strong> {response.answer}
              </Typography>
              {isCorrect ? (
                <Typography
                variant="body1"
                sx={{
                  color: "success.main", 
                  fontWeight: "bold",
                }}
              >
                Correct!
              </Typography>
              ) : (
                <Box className="correct-answer" >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "error.main", // Red text for incorrect answers
                      fontWeight: "bold",
                    }}
                  >
                    Correct Answer:{" "}
                    {question.options.find((option) => option.points === 0)?.text}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    <strong>Points Added:</strong> {chosenOption?.points || 0}
                  </Typography>
                  <Paper
                    elevation={1}
                    sx={{
                      padding: "10px",
                      backgroundColor: "background.paper",
                      color: "text.primary",
                      borderRadius: "6px",
                    }}
                  >
                    <strong>Explanation:</strong>
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: "5px",
                        fontStyle: "italic",
                      }}
                    >
                      {question.explanation}
                    </Typography>
                  </Paper>
                </Box>
              )}
            </Paper>
          );
        })}
      </Box>
      <Button
        variant="contained"
        sx={{
          padding: "10px 20px",
          marginTop: "20px",
          fontSize: "16px",
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        onClick={handleRestart}
      >
        Restart Quiz
      </Button>
    </Box>
  );
};

export default ResultPage;
