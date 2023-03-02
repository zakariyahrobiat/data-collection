import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import LogIn from "./login";
import Home from "./home";
import Dashboard from "./dashboard";
import Users from "./users";

const App: React.FC = () => {
  return (
    <div className="w-screen md:flex justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
