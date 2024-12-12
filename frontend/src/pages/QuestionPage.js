import React, { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import { getQuizProgress } from "../utils/localStorage";
import { Button, Card, Paper, Box, Typography } from "@mui/material";
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
        return <CookieConsentModal />;
      default:
        return null;
    }
  };

  // Prevent rendering until questions are loaded and index is valid
  if (!questions.length || currentQuestionIndex >= questions.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        marginTop: "-100px",
        backgroundColor: "background.default",
        minHeight: "100vh",
        color: "text.primary",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "background.paper",
          borderRadius: "8px",
          boxShadow: 4,
          marginBottom: "20px",
        }}
      >
        {renderSpecialComponent()}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          {questions[currentQuestionIndex].section}
        </Typography>
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          index={currentQuestionIndex}
          onNext={handleNext}
          onBack={handleBack} // Pass handleBack to QuizQuestion
        />
        {Object.keys(progress.responses).length === questions.length && (
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            onClick={handleSkipToEnd}
          >
            Skip to the End
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default QuestionsPage;
