import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion";
import questions from "../questions.json";

const PrivacyToolsSection = () => {
  const navigate = useNavigate();
  const sectionQuestions = questions.find((q) => q.section === "Privacy Tool Knowledge").questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < sectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/social-media"); // Navigate to the next section
    }
  };

  return (
    <div className="section">
      <QuizQuestion
        questionData={sectionQuestions[currentQuestionIndex]}
        onNext={handleNext}
      />
    </div>
  );
};

export default PrivacyToolsSection;
