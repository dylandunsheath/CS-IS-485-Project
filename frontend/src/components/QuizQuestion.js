import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Card,
  CardActionArea
} from "@mui/material";
import { saveQuizProgress, getQuizProgress } from "../utils/localStorage";
import "../styles/QuizQuestion.css";

const QuizQuestion = ({ question, index, onNext }) => {
  const [answer, setAnswer] = useState(null);
  const progress = getQuizProgress();

  useEffect(() => {
    // Restore answer if it exists
    const savedAnswer = progress.responses[index]?.answer;
    if (savedAnswer) setAnswer(savedAnswer);
  }, [index, progress]);

  const handleCardClick = (optionText) => {
    setAnswer(optionText); // Update the selected answer
  };

  const handleSubmit = () => {
    if (!answer) return;

    // Check if the answer is correct
    const isCorrect = question.options.find((opt) => opt.text === answer).points === 0;

    // Save progress
    const updatedProgress = {
      ...progress,
      responses: {
        ...progress.responses,
        [index]: { answer, isCorrect }
      },
      currentQuestionIndex: index + 1
    };

    saveQuizProgress(updatedProgress);
    onNext();
  };

  return (
    <div className="quiz-question">
      <FormControl>
        <FormLabel>{question.text}</FormLabel>
        <RadioGroup value={answer}>
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
        {question.explanation && <p>{question.explanation}</p>}
        <Button variant="contained" className="next-button" onClick={handleSubmit} disabled={!answer}>
          Next
        </Button>
      </FormControl>
    </div>
  );
};

export default QuizQuestion;
