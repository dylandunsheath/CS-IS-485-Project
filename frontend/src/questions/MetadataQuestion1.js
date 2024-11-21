import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { updateRiskScore } from "../utils/localStorage";

const MetadataQuestion1 = ({ onNext }) => {
  const [answer, setAnswer] = useState(null);

  const handleSubmit = () => {
    if (answer === "No") {
      updateRiskScore(3); // Add 3 points for a risky answer
    }
    onNext(); // Move to the next question
  };

  return (
    <div className="question">
      <FormControl>
        <FormLabel>Are you aware of what metadata is?</FormLabel>
        <RadioGroup
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes, I understand what metadata is." />
          <FormControlLabel value="No" control={<Radio />} label="No, I’m not familiar with it." />
        </RadioGroup>
        <p>
          Metadata can reveal personal information unintentionally. It’s important to remove metadata before sharing files publicly.
        </p>
        <Button variant="contained" onClick={handleSubmit}>Next</Button>
      </FormControl>
    </div>
  );
};

export default MetadataQuestion1;
