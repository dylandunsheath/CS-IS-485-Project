import React, { useEffect, useState } from "react";
import QuizQuestion from "../components/QuizQuestion";

const MetadataSection = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch questions dynamically
    fetch("/questions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        return response.json();
      })
      .then((data) => {
        const metadataQuestions = data.find((section) => section.section === "Metadata Awareness").questions;
        setQuestions(metadataQuestions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Navigate to the next section.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (questions.length === 0) {
    return <div>No questions found.</div>;
  }

  return (
    <div className="section">
      <QuizQuestion questionData={questions[currentQuestionIndex]} onNext={handleNext} />
    </div>
  );
};

export default MetadataSection;
