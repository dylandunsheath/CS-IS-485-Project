import React, { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import { getQuizProgress } from "../utils/localStorage";
import { Button , Card} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/QuestionPage.css"

const QuestionsPage = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const progress = getQuizProgress();

  useEffect(() => {
    setCurrentQuestionIndex(progress.currentQuestionIndex || 0);
  }, [progress.currentQuestionIndex]);

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
    <div style={{ padding: "20px" }} className="question-page">
      {questions.length > 0 && currentQuestionIndex < questions.length ? (
        <Card className="question-holder">
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
        </Card>
      ) : null}
    </div>
  );
};

export default QuestionsPage;
