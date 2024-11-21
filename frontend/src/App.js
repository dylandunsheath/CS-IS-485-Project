import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MetadataSection from "./sections/MetadataSection";
import PrivacyToolsSection from "./sections/PrivacyToolsSection";
import SocialMediaSection from "./sections/SocialMediaSection";
import MobileSecuritySection from "./sections/MobileSecuritySection";
import Menu from "./components/Menu";
import { getRiskScore } from "./utils/localStorage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Menu /> {/* Add the menu */}
        <Routes>
          <Route path="/" element={<Navigate to="/metadata" />} />
          <Route path="/metadata" element={<MetadataSection />} />
          <Route path="/privacy-tools" element={<PrivacyToolsSection />} />
          <Route path="/social-media" element={<SocialMediaSection />} />
          <Route path="/mobile-security" element={<MobileSecuritySection />} />
          <Route
            path="/results"
            element={
              <div>
                <h2>Quiz Completed!</h2>
                <p>Your Total Risk Score: {getRiskScore()}</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
