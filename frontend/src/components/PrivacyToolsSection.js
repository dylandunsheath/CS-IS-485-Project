import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { updateRiskScore } from '../utils/localStorage';

const PrivacyToolsSection = ({ onNext }) => {
    const [answer, setAnswer] = useState(null);

    const handleSubmit = () => {
        if (answer === "Yes") {
            updateRiskScore(1);
        }
        onNext();
    };

    return (
        <div>
            <FormControl>
                <FormLabel>Do you believe that using incognito mode, VPN, or TOR browser keeps you completely secure?</FormLabel>
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

export default PrivacyToolsSection;
