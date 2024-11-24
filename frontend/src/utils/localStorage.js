export const getRiskScore = () => JSON.parse(localStorage.getItem("riskScore")) || 0;

export const updateRiskScore = (points) => {
  const currentScore = getRiskScore();
  localStorage.setItem("riskScore", JSON.stringify(currentScore + points));
};

export const getQuizProgress = () => {
    return JSON.parse(localStorage.getItem("quizProgress")) || {
      currentQuestionIndex: 0,
      responses: {}
    };
  };
  
  export const saveQuizProgress = (progress) => {
    localStorage.setItem("quizProgress", JSON.stringify(progress));
  };
  
  export const clearQuizProgress = () => {
    localStorage.removeItem("quizProgress");
  };
  
  