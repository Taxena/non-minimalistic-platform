import React, { useState, useEffect } from "react";
import "./Staking.css";

const Staking = () => {
  const [stakingOpportunities, setStakingOpportunities] = useState([]);
  const [selectedStake, setSelectedStake] = useState(null);
  const [stakingAmount, setStakingAmount] = useState(0);
  const [isStaking, setIsStaking] = useState(false);
  const [recentStakes, setRecentStakes] = useState([]);

  useEffect(() => {
    setStakingOpportunities([
      { id: 1, name: "ETH Staking", rate: 5, lockPeriod: "30 days", totalStaked: "1,000 ETH" },
      { id: 2, name: "DAI Staking", rate: 4.2, lockPeriod: "60 days", totalStaked: "500,000 DAI" },
      { id: 3, name: "BTC Staking", rate: 3.8, lockPeriod: "90 days", totalStaked: "300 BTC" },
    ]);

    setRecentStakes([
      { id: 1, user: "0xA3...9F2", amount: "10 ETH", time: "5m ago" },
      { id: 2, user: "0xB7...3C4", amount: "500 DAI", time: "12m ago" },
      { id: 3, user: "0xD2...8A1", amount: "0.5 BTC", time: "30m ago" },
    ]);
  }, []);

  const handleStakeClick = (stake) => {
    setSelectedStake(stake);
  };

  const handleStakeAmountChange = (e) => {
    setStakingAmount(e.target.value);
  };

  const handleStakeSubmit = () => {
    if (stakingAmount <= 0) {
      alert("Please enter a valid staking amount.");
      return;
    }
    setIsStaking(true);
    setTimeout(() => {
      alert(`Successfully staked ${stakingAmount} of ${selectedStake.name}`);
      setIsStaking(false);
    }, 2000);
  };

  return (
    <div className="staking-container">
      <h1 className="staking-title">🔥 Staking & Yield Farming 🚀</h1>

      <section className="staking-opportunities">
        <h2>💰 Staking Opportunities</h2>
        <div className="staking-list">
          {stakingOpportunities.map((stake) => (
            <div key={stake.id} className="staking-item" onClick={() => handleStakeClick(stake)}>
              <h3>{stake.name}</h3>
              <p>📈 Interest Rate: {stake.rate}%</p>
              <p>🔒 Lock-in Period: {stake.lockPeriod}</p>
              <p>💎 Total Staked: {stake.totalStaked}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedStake && (
        <section className="staking-details">
          <h2>💎 Stake {selectedStake.name}</h2>
          <div className="staking-form">
            <label htmlFor="stakeAmount">Enter Amount:</label>
            <input type="number" id="stakeAmount" value={stakingAmount} onChange={handleStakeAmountChange} />
            <button onClick={handleStakeSubmit} className="stake-btn" disabled={isStaking}>
              {isStaking ? "⏳ Processing..." : "✅ Stake Now"}
            </button>
          </div>
          <section className="staking-rewards">
            <h2>🎯 Estimated Rewards</h2>
            <div className="rewards-info">
              {selectedStake && stakingAmount > 0 && (
                <p>
                  Staking <strong>{stakingAmount} {selectedStake.name}</strong> will earn approximately{" "}
                  <strong>{((stakingAmount * selectedStake.rate) / 100).toFixed(2)} {selectedStake.name}</strong> in {selectedStake.lockPeriod}.
                </p>
              )}
            </div>
          </section>
        </section>


      )}



      <section className="recent-stakes">
        <h2>🔥 Recent Staking Activity</h2>
        <ul>
          {recentStakes.map((stake) => (
            <li key={stake.id}>
              {stake.user} staked <strong>{stake.amount}</strong> - {stake.time}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Staking;
