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
  Grid2,
  Alert,
} from "@mui/material";
import { saveQuizProgress, getQuizProgress } from "../utils/localStorage";
import "../styles/QuizQuestion.css";

const QuizQuestion = ({ question, index, onNext, onBack }) => {
  const [answer, setAnswer] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // Alert state
  const progress = getQuizProgress();

  useEffect(() => {
    // Restore answer if it exists
    const savedAnswer = progress.responses[index]?.answer;
    if (savedAnswer) setAnswer(savedAnswer);
  }, [index, progress]);

  const handleCardClick = (optionText) => {
    setAnswer(optionText); // Update the selected answer
    setShowAlert(false); // Hide alert if previously shown

    // Save answer immediately when selected
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
      setShowAlert(true); // Show alert if no option is selected
      return;
    }
    onNext(); // Proceed to the next question
  };

  return (
    <div className="quiz-question">
      <FormControl>
        <FormLabel>{question.text}</FormLabel>
        <RadioGroup value={answer} className="radio-holder">
          {question.options.map((option, idx) => (
            <Card
              key={idx}
              className={`question-options ${answer === option.text ? "selected" : ""}`}
              onClick={() => handleCardClick(option.text)} // Handle card click
            >
              <CardActionArea>
                <FormControlLabel
                  value={option.text}
                  control={<Radio />}
                  label={option.text}
                  checked={answer === option.text} // Bind checked state
                />
              </CardActionArea>
            </Card>
          ))}
        </RadioGroup>
        {showAlert && ( // Alert message
          <Alert severity="warning" sx={{ marginTop: "10px" }}>
            Please select an option before proceeding!
          </Alert>
        )}
        <Grid2 container spacing={2} sx={{ marginTop: "20px" }}>
          <Grid2 item>
            <Button
              variant="outlined"
              onClick={onBack}
              disabled={index === 0} // Disable if on the first question
            >
              Back
            </Button>
          </Grid2>
          <Grid2 item>
            <Button
              variant="contained"
              className="next-button"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Grid2>
        </Grid2>
      </FormControl>
    </div>
  );
};

export default QuizQuestion;
