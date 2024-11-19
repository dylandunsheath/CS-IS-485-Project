import React, { useState } from 'react';
import MetadataSectionPage from './pages/MetadataSectionPage';
import PrivacyToolsPage from './pages/PrivacyToolsPage';
import SocialMediaPage from './pages/SocialMediaPage';
import MobileSecurityPage from './pages/MobileSecurityPage';
import { getRiskScore } from './utils/localStorage';

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [
        <MetadataSectionPage onNext={() => setCurrentPage(currentPage + 1)} />,
        <PrivacyToolsPage onNext={() => setCurrentPage(currentPage + 1)} />,
        <SocialMediaPage onNext={() => setCurrentPage(currentPage + 1)} />,
        <MobileSecurityPage onNext={() => setCurrentPage(currentPage + 1)} />,
    ];

    return (
        <div className="App">
            {currentPage < pages.length ? (
                pages[currentPage]
            ) : (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>Your Total Risk Score: {getRiskScore()}</p>
                </div>
            )}
        </div>
    );
};

export default App;
