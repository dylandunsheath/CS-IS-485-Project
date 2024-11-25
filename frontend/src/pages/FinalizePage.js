import React from "react";
import { useNavigate } from "react-router-dom";
import { getQuizProgress } from "../utils/localStorage";
import { Button, List, ListItem, ListItemText, Paper } from "@mui/material";
import "../styles/FinalizePage.css";

const FinalizePage = ({ questions, setCurrentQuestionIndex }) => {
  const navigate = useNavigate();
  const progress = getQuizProgress();

  const handleFinalize = () => {
    navigate("/results");
  };

  const handleEdit = (index) => {
    setCurrentQuestionIndex(index); // Ensure index is updated
    setTimeout(() => {
      navigate(`/quiz`);
    }, 50);
  };

  return (
    <div className="finalize-container" style={{ padding: "20px" }}>
      <h1>Review Your Answers</h1>
      <List>
        {questions.map((question, index) => (
          <Paper elevation={3} className="finalize-question" key={index}>
            <ListItem button onClick={() => handleEdit(index)}>
              <ListItemText
                primary={`Question ${index + 1} - ${question.text}`}
                secondary={`Your Answer: ${
                  progress.responses[index]?.answer || "Not Answered"
                }`}
              />
            </ListItem>
          </Paper>
        ))}
      </List>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFinalize}
          disabled={questions.some((_, index) => !progress.responses[index])}
        >
          Submit Answers
        </Button>
      </div>
    </div>
  );
};

export default FinalizePage;
