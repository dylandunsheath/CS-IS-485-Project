import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"; // Add useNavigate
import MenuPage from "./pages/MenuPage";
import ResultsPage from "./pages/ResultPage.js";
import FinalizePage from "./pages/FinalizePage.js";
import QuestionsPage from "./pages/QuestionPage.js";
import SideMenu from "./components/SideMenu";
import Navbar from "./components/Navbar";
import { getQuizProgress } from "./utils/localStorage";
import "./styles/App.css";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const progress = getQuizProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const navigate = useNavigate(); // Define navigate

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        const allQuestions = data.flatMap((section) =>
          section.questions.map((q) => ({ ...q, section: section.section }))
        );
        setQuestions(allQuestions);
      });
  }, []);

  const handleNavigate = (globalIndex) => {
    setCurrentQuestionIndex(globalIndex); // Set the global index
    setMenuOpen(false); // Close the side menu
  };
  
  

  const isQuizActive = currentQuestionIndex < questions.length;

  return (
    <div className="mainpage">
      <Navbar showMenu={isQuizActive} onMenuToggle={() => setMenuOpen(true)} />
      {isQuizActive && (
        <SideMenu
          questions={questions}
          onNavigate={handleNavigate} // Pass handleNavigate to SideMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          progress={progress} // Pass progress to SideMenu
        />
      )}
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route
          path="/quiz"
          element={
            <QuestionsPage
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          }
        />
        <Route
          path="/finalize"
          element={
            <FinalizePage
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          }
        />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
};

export default App;
