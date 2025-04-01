import React from 'react';
import './StatsCard.css';
import { FaLock } from "react-icons/fa";

const StatsCard = ({ title, value, icon }) => {
  return (
    // <div className="stats-card">
    //   <div className="stats-card-icon">{icon}</div>
    //   <div className="stats-card-content">
    //     <h3 className="stats-card-title">{title}</h3>
    //     <p className="stats-card-value">{value}</p>
    //   </div>
    // </div>
    <section className="stats-cards">
      <div className="stats-card">
        <div className="icon">📊</div>
        <div className="stats-content">
          <h3>Total Volume</h3>
          <p className="stats-value">$24.8B</p>
          <p>Past 24 hours</p>
        </div>
      </div>
      <div className="stats-card">
        <div className="icon">👥</div>
        <div className="stats-content">
          <h3>Active Users</h3>
          <p className="stats-value">1.2M</p>
          <p>Current users</p>
        </div>
      </div>
      <div className="stats-card">
        <div className="icon">💼</div>
        <div className="stats-content">
          <h3>Total Wallets</h3>
          <p className="stats-value">4.5M</p>
          <p>Connected wallets</p>
        </div>
      </div>
      <div className="stats-card">
        <div className="icon">⛏️</div>
        <div className="stats-content">
          <h3>Blocks Mined</h3>
          <p className="stats-value">789.3K</p>
          <p>Total blocks</p>
        </div>
      </div>
    </section>
  );
};

export default StatsCard;
