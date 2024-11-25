import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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

  const handleNavigate = (index) => {
    if (progress.responses[index]) {
      setMenuOpen(false);
    }
  };

  const isQuizActive = progress.currentQuestionIndex < questions.length;

  return (
    <div className="mainpage">
      <Navbar showMenu={isQuizActive} onMenuToggle={() => setMenuOpen(true)} />
      {isQuizActive && (
        <SideMenu
          questions={questions}
          onNavigate={handleNavigate}
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      )}
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/quiz" element={<QuestionsPage questions={questions} />} />
        <Route path="/finalize" element={<FinalizePage questions={questions} />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
};

export default App;
