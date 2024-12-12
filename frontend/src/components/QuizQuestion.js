import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Card,
  CardActionArea,
  Alert,
  Typography,
  Box,
} from "@mui/material";
import { saveQuizProgress, getQuizProgress } from "../utils/localStorage";

const QuizQuestion = ({ question, index, onNext, onBack }) => {
  const [answer, setAnswer] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const progress = getQuizProgress();

  useEffect(() => {
    const savedAnswer = progress.responses[index]?.answer;
    if (savedAnswer) setAnswer(savedAnswer);
  }, [index]);

  const handleCardClick = (optionText) => {
    setAnswer(optionText);
    setShowAlert(false);
    const isCorrect = question.options.find((opt) => opt.text === optionText).points === 0;
    const updatedProgress = {
      ...progress,
      responses: {
        ...progress.responses,
        [index]: { answer: optionText, isCorrect },
      },
      currentQuestionIndex: index,
    };
    saveQuizProgress(updatedProgress);
  };

  const handleSubmit = () => {
    if (!answer) {
      setShowAlert(true);
      return;
    }
    onNext();
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#EAECEE",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <FormControl>
        <FormLabel
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#EAECEE",
            marginBottom: "20px",
            display: "block",
          }}
        >
          {question.text}
        </FormLabel>
        <RadioGroup value={answer}>
          {question.options.map((option, idx) => (
            <Card
              key={idx}
              sx={{
                backgroundColor: answer === option.text ? "#0070BA" : "#2C2C2C",
                color: answer === option.text ? "#FFFFFF" : "#A5A5A5",
                marginBottom: "15px",
                border: "1px solid #4C566A",
                transition: "transform 0.2s, background-color 0.3s",
                cursor: "pointer",
                padding: "15px", // Added padding for options
                borderRadius: "8px",
                "&:hover": {
                  transform: "scale(1.02)",
                  backgroundColor: "#3C3F41",
                },
              }}
              onClick={() => handleCardClick(option.text)}
            >
  <CardActionArea>
    <FormControlLabel
      value={option.text}
      control={<Radio sx={{ display: "none" }} />}
      label={
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: answer === option.text ? "bold" : "normal",
            color: answer === option.text ? "#FFFFFF" : "#A5A5A5",
          }}
        >
          {option.text}
        </Typography>
      }
    />
  </CardActionArea>
</Card>

          ))}
        </RadioGroup>
        {showAlert && (
          <Alert
            severity="warning"
            sx={{
              marginTop: "20px",
              backgroundColor: "#2C2C2C",
              color: "#FFB74D",
              borderRadius: "8px",
            }}
          >
            Please select an option before proceeding!
          </Alert>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <Button
            variant="outlined"
            onClick={onBack}
            sx={{
              borderColor: "#0070BA",
              color: "#EAECEE",
              "&:hover": {
                backgroundColor: "#2C2C2C",
                borderColor: "#0070BA",
              },
            }}
            disabled={index === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#0070BA",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#005EA6",
              },
            }}
          >
            Next
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default QuizQuestion;
