import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { updateRiskScore } from '../utils/localStorage';

const MetadataSection = ({ onNext }) => {
    const [answer, setAnswer] = useState(null);

    const handleSubmit = () => {
        if (answer === "No") {
            updateRiskScore(3);
        }
        onNext();
    };

    return (
        <div className="metadata-section">
            <FormControl>
                <FormLabel>Are you aware of what metadata is?</FormLabel>
                <RadioGroup
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <Button variant="contained" onClick={handleSubmit}>Next</Button>
            </FormControl>
        </div>
    );
};

export default MetadataSection;
