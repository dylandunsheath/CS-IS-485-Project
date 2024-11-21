import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { updateRiskScore } from "../utils/localStorage";

const QuizQuestion = ({ questionData, onNext }) => {
  const [answer, setAnswer] = useState(null);

  const handleSubmit = () => {
    if (!answer) return; // Prevent submitting without an answer
    const selectedOption = questionData.options.find(opt => opt.text === answer);
    updateRiskScore(selectedOption.points); // Update risk score
    onNext(); // Navigate to the next question
  };

  return (
    <div className="quiz-question">
      <FormControl>
        <FormLabel>{questionData.text}</FormLabel>
        <RadioGroup value={answer} onChange={(e) => setAnswer(e.target.value)}>
          {questionData.options.map((option, idx) => (
            <FormControlLabel key={idx} value={option.text} control={<Radio />} label={option.text} />
          ))}
        </RadioGroup>
        {questionData.explanation && <p>{questionData.explanation}</p>}
        <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </FormControl>
    </div>
  );
};

export default QuizQuestion;
