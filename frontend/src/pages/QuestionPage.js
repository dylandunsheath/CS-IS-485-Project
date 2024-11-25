import React, { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import { getQuizProgress } from "../utils/localStorage";
import { Button , Card, Paper} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/QuestionPage.css"
import amazonEmail from "../images/Amazon-email-spoof.png";

const QuestionsPage = ({ questions ,currentQuestionIndex, setCurrentQuestionIndex}) => {
  const navigate = useNavigate();
  const progress = getQuizProgress();

  useEffect(() => {
    if (progress.currentQuestionIndex !== undefined) {
      setCurrentQuestionIndex(progress.currentQuestionIndex);
    }
  }, []);
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigate("/finalize");
    }
  };

  const handleSkipToEnd = () => {
    navigate("/finalize");
  };

  return (
    <div className="question-page">
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <Paper className="question-holder" elevation={3}>
            {
            questions[currentQuestionIndex].id && questions[currentQuestionIndex].id === "behavioral_q1"?
            <img src={amazonEmail} alt="quiz sample email" className="quiz-image" />
            : null
            }
          <h2>{questions[currentQuestionIndex].section}</h2>
          <QuizQuestion
            question={questions[currentQuestionIndex]}
            index={currentQuestionIndex}
            onNext={handleNext}
          />
          {Object.keys(progress.responses).length === questions.length && (
            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              onClick={handleSkipToEnd}
            >
              Skip to the End
            </Button>
          )}
        </Paper>
      ) : null}
    </div>
  );
};

export default QuestionsPage;
