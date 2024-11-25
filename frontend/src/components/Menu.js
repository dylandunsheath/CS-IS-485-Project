import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {

    const handleStart = () => {
        const progress = localStorage.getItem("quizProgress");
        if (progress) {
          // Ask user if they want to resume or restart
          if (window.confirm("You have an incomplete quiz. Do you want to resume?")) {
            navigate(progress);
            return;
          } else {
            localStorage.removeItem("quizProgress");
          }
        }
        navigate("/metadata");
      };

      
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/metadata" activeClassName="active">
            Metadata Awareness
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy-tools" activeClassName="active">
            Privacy Tools
          </NavLink>
        </li>
        <li>
          <NavLink to="/social-media" activeClassName="active">
            Social Media
          </NavLink>
        </li>
        <li>
          <NavLink to="/mobile-security" activeClassName="active">
            Mobile Security
          </NavLink>
        </li>
        <li>
          <NavLink to="/results" activeClassName="active">
            Results
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
