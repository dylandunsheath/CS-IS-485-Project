import React from "react";
import { useNavigate } from "react-router-dom";
import { getQuizProgress } from "../utils/localStorage";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Box,
} from "@mui/material";

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
    <Box
      sx={{
        padding: "30px",
        margin: "auto",
        backgroundColor: "background.paper",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{ marginBottom: "20px", color: "text.primary" }}
      >
        Review Your Answers
      </Typography>
      <List>
        {questions.map((question, index) => (
          <Paper
            elevation={3}
            key={index}
            sx={{
              maxWidth:"900px",
              margin: "10px auto",
              padding: "15px",
              backgroundColor: "background.default",
              "&:hover": {
                backgroundColor: "action.hover",
                cursor: "pointer",
              },
            }}
          >
            <ListItem
              button
              onClick={() => handleEdit(index)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <ListItemText
                primary={`Question ${index + 1}: ${question.text}`}
                secondary={`Your Answer: ${
                  progress.responses[index]?.answer || "Not Answered"
                }`}
                primaryTypographyProps={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
                secondaryTypographyProps={{
                  color: progress.responses[index]?.answer
                    ? "success.main"
                    : "error.main",
                }}
              />
            </ListItem>
          </Paper>
        ))}
      </List>
      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFinalize}
          disabled={questions.some((_, index) => !progress.responses[index])}
          sx={{
            padding: "10px 20px",
            fontSize: "16px",
          }}
        >
          Submit Answers
        </Button>
      </Box>
    </Box>
  );
};

export default FinalizePage;
