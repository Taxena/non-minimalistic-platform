import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Staking from './pages/Staking';
import Marketplace from './pages/Marketplace';
import Explorer from './pages/Explorer';
import DeveloperTools from './pages/DeveloperTools';
import Governance from './pages/Governance';
import Support from './pages/Support';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/developer-tools" element={<DeveloperTools />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
