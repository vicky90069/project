// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    
      <Routes>
        {/* Public Route: Home page with Login */}
        <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />

        {/* Private Route: Dashboard (only accessible if logged in) */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }
        />
      </Routes>
   
  );
};

export default App;