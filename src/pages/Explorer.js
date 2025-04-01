import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import "./Explorer.css";

const Explorer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blockData, setBlockData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);

    console.log("Search query:", query);

    if (query === "block123") {
      setBlockData({
        hash: "block123",
        miner: "MinerName",
        size: "2MB",
        time: "2025-01-07 12:30:00",
        transactions: 100,
      });
      setTransactionData(null);
    } else if (query === "tx456") {
      setTransactionData({
        hash: "tx456",
        status: "Completed",
        fee: "0.01 BTC",
        inputs: [{ address: "address1", amount: "0.5 BTC" }],
        outputs: [{ address: "address2", amount: "0.49 BTC" }],
      });
      setBlockData(null);
    } else {
      setBlockData(null);
      setTransactionData(null);
    }
  };

  return (
    <div className="explorer-container">
      {/* Header */}
      <div className="explorer-header">
        <h1 className="explorer-title">Blockchain Explorer</h1>
        <p className="explorer-subtitle">Explore transactions, blocks, and live stats</p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Live Stats */}
      <div className="stats-container">
        <div className="stat-box">
          <h3>Block Height</h3>
          <p>#15,783,210</p>
        </div>
        <div className="stat-box">
          <h3>Transactions per Second</h3>
          <p>142 TPS</p>
        </div>
        <div className="stat-box">
          <h3>Active Validators</h3>
          <p>207</p>
        </div>
      </div>

      {/* Block & Transaction Results */}
      {blockData && (
        <div className="block-details">
          <h2 className="section-title">Block Details</h2>
          <p><strong>Block Hash:</strong> {blockData.hash}</p>
          <p><strong>Miner:</strong> {blockData.miner}</p>
          <p><strong>Size:</strong> {blockData.size}</p>
          <p><strong>Time:</strong> {blockData.time}</p>
          <p><strong>Transactions:</strong> {blockData.transactions}</p>
        </div>
      )}

      {transactionData && (
        <div className="transaction-details">
          <h2 className="section-title">Transaction Details</h2>
          <p><strong>Transaction Hash:</strong> {transactionData.hash}</p>
          <p><strong>Status:</strong> {transactionData.status}</p>
          <p><strong>Fee:</strong> {transactionData.fee}</p>
          <div>
            <h3>Inputs</h3>
            {transactionData.inputs.map((input, index) => (
              <p key={index}><strong>Address:</strong> {input.address}, <strong>Amount:</strong> {input.amount}</p>
            ))}
          </div>
          <div>
            <h3>Outputs</h3>
            {transactionData.outputs.map((output, index) => (
              <p key={index}><strong>Address:</strong> {output.address}, <strong>Amount:</strong> {output.amount}</p>
            ))}
          </div>
        </div>
      )}

      {!blockData && !transactionData && searchQuery && (
        <div className="no-data">
          <p>No results found for "{searchQuery}". Please try another query.</p>
        </div>
      )}

      {/* Recent Activity Section */}
      <div className="recent-activity">
        <h2 className="section-title">Recent Blocks</h2>
        <ul>
          <li>#15783112 - Mined by Validator_42 - 2.3MB</li>
          <li>#15783111 - Mined by Validator_18 - 2.1MB</li>
          <li>#15783110 - Mined by Validator_29 - 2.5MB</li>
        </ul>

        <h2 className="section-title">Recent Transactions</h2>
        <ul>
          <li>Tx: a3b45f... Status: Confirmed</li>
          <li>Tx: 8c7d2e... Status: Pending</li>
          <li>Tx: f4d3b1... Status: Confirmed</li>
        </ul>
      </div>
    </div>
  );
};

export default Explorer;
