import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import ProteinCounter from './pages/ProteinCounter';
import Activity from './pages/Activity';
import BMI from './pages/BMI';
import WaterTracker from './pages/WaterTracker';
import Progress from './pages/Progress';
import Login from './pages/Login';
import { AppProvider } from './context/AppContext';
import './styles/globals.css';

function AppContent() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageTitles = {
    '/': 'Dashboard',
    '/protein': 'Protein & Calories',
    '/activity': 'Activity',
    '/bmi': 'BMI Calculator',
    '/water': 'Water Tracker',
    '/progress': 'Progress'
  };

  const currentTitle = pageTitles[location.pathname] || 'Fitness Tracker';

  return (
    <div className="app-wrapper">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content">
        <Header 
          title={currentTitle} 
          onMenuClick={() => setSidebarOpen(true)}
          sidebarOpen={sidebarOpen}
        />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/protein" element={<ProteinCounter />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/water" element={<WaterTracker />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}

export default App;