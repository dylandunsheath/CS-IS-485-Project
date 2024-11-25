import React from "react";
import { useNavigate } from "react-router-dom";
import { getQuizProgress } from "../utils/localStorage";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const FinalizePage = ({ questions }) => {
  const navigate = useNavigate();
  const progress = getQuizProgress();

  const handleFinalize = () => {
    navigate("/results");
  };

  const handleEdit = (index) => {
    navigate(`/quiz?question=${index}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Review Your Answers</h1>
      <List>
        {questions.map((question, index) => (
          <ListItem key={index} button onClick={() => handleEdit(index)}>
            <ListItemText
              primary={`Q${index + 1}: ${question.text}`}
              secondary={`Your Answer: ${
                progress.responses[index]?.answer || "Not Answered"
              }`}
            />
          </ListItem>
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
