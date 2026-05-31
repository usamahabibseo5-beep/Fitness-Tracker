

// 


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Scroll from "./components/charts/ScrollToTop"
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import BMI from "./pages/BMI";
import Activity from "./pages/Activity";
import ProteinCounter from "./pages/ProteinCounter";
import WaterTracker from "./pages/WaterTracker";
import Progress from "./pages/Progress";
import Login from "./pages/Login";
import Steps from "./pages/steps";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import WeightLoss from "./pages/weight-loss";
import WeightGain from "./pages/weightGain";
import MaintainWeight from "./pages/maintainWeight";
import ArticleInfo from "./pages/ArticleInfo";
import Article from "./pages/Article";
import Drpage from "./pages/doctor";
import GoalBanner from "./pages/GoalBanner";
import { useAppContext } from "./context/AppContext";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user } = useAppContext();

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <Router>
      <Routes>

        {/* LOGIN ROUTE */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        {/* MAIN APP (PROTECTED) */}
        <Route
          path="/*"
          element={
            user ? (
              <div className="app-layout">

                <Sidebar
                  isOpen={sidebarOpen}
                  onClose={() => setSidebarOpen(false)}
                />

                <div className={`main-section ${sidebarOpen ? "shifted" : ""}`}>

                  <Header
                    title="Fitness Tracker"
                    onMenuClick={toggleSidebar}
                    sidebarOpen={sidebarOpen}
                  />

                  <div className="page-content">
                          <Scroll />
                    <Routes>
                          {/* <Route path="/scroll" element={<Scroll />} /> */}
                      <Route path="/" element={<Home />} />
                      <Route path="/bmi" element={<BMI />} />
                      <Route path="/activity" element={<Activity />} />
                      <Route path="/notifications" element={<Notification />} />
                   
                      <Route path="/protein" element={<ProteinCounter />} />
                      <Route path="/water" element={<WaterTracker />} />
                      <Route path="/progress" element={<Progress />} />
                      <Route path="/steps" element={<Steps />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/weight-loss" element={<WeightLoss />} />
                      <Route path="/weightGain" element={<WeightGain />} />
                      <Route path="/maintainWeight" element={<MaintainWeight />} />
                         <Route path="/articleinfo" element={<ArticleInfo />} />
                          <Route path="/article" element={<Article />} />
                      <Route path="/Drpage" element={<Drpage />} />
                         <Route path="/Drpage" element={<GoalBanner />} />
                    </Routes>
                  </div>

                  <Footer />

                </div>

              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      </Routes>
    </Router>
  );
}

export default App;