export const getRiskScore = () => JSON.parse(localStorage.getItem('riskScore')) || 0;

export const updateRiskScore = (points) => {
    const currentScore = getRiskScore();
    localStorage.setItem('riskScore', JSON.stringify(currentScore + points));
};
