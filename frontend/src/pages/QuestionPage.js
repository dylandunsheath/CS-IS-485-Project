import React, { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import { getQuizProgress } from "../utils/localStorage";
import { Button, Card, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/QuestionPage.css";
import EmailExample from "../components/EmailExample";
import CookieConsentModal from "../components/CookieConsentModal";

const QuestionsPage = ({ questions, currentQuestionIndex, setCurrentQuestionIndex }) => {
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

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };
  
  const renderSpecialComponent = () => {
    const questionId = questions[currentQuestionIndex]?.id;

    // Dynamically render components based on question id
    switch (questionId) {
      case "behavioral_q1":
        return <EmailExample />;

      case "mobile_q5":
        return <CookieConsentModal />
      default:
        return null;
    }
  };

  // Prevent rendering until questions are loaded and index is valid
  if (!questions.length || currentQuestionIndex >= questions.length) {
    return <div>Loading...</div>; // Display a loading state or fallback UI
  }

  return (
    <div className="question-page">
      <Paper className="question-holder" elevation={3}>
        {renderSpecialComponent()}
        <h2>{questions[currentQuestionIndex].section}</h2>
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          index={currentQuestionIndex}
          onNext={handleNext}
          onBack={handleBack} // Pass handleBack to QuizQuestion
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
    </div>
  );
};

export default QuestionsPage;
