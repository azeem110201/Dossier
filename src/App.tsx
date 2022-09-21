import React from "react";
import PortfolioPage from "./pages/PortfolioPages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;