import React from "react";
import Home from "./pages/Home";
import DietPage from "./pages/DietPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkoutPage from "./pages/WorkoutPage";
import ContactPage from "./pages/ContactPage";
import FAQ from "./components/FAQ";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/diet" element={<DietPage />} />
                <Route path="/workout" element={<WorkoutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
};

export default App;
