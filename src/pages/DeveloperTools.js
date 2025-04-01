import React, { useState } from "react";
import "./DeveloperTools.css";

const DeveloperTools = () => {
  const [selectedTab, setSelectedTab] = useState("documentation");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="developer-tools-container">
      <h1 className="developer-tools-title">🚀 Developer Tools Hub</h1>
      <p className="developer-tools-subtitle">
        Everything you need to build, deploy, and interact with smart contracts and APIs.
      </p>

      {/* Tab navigation */}
      <div className="tabs">
        <button
          className={`tab ${selectedTab === "documentation" ? "active" : ""}`}
          onClick={() => handleTabChange("documentation")}
        >
          📖 Documentation
        </button>
        <button
          className={`tab ${selectedTab === "contracts" ? "active" : ""}`}
          onClick={() => handleTabChange("contracts")}
        >
          🔗 Smart Contracts
        </button>
        <button
          className={`tab ${selectedTab === "apis" ? "active" : ""}`}
          onClick={() => handleTabChange("apis")}
        >
          🔌 APIs
        </button>
      </div>

      {/* Documentation Tab */}
      {selectedTab === "documentation" && (
        <div className="tab-content">
          <h2>📜 Smart Contract Documentation</h2>
          <p>Comprehensive guides to deploying and interacting with smart contracts.</p>
          <ul className="doc-list">
            <li>✅ <a href="#">Introduction to Smart Contracts</a></li>
            <li>⚡ <a href="#">How to Deploy Smart Contracts</a></li>
            <li>🔄 <a href="#">Interacting with Deployed Contracts</a></li>
            <li>📑 <a href="#">Example Code Snippets</a></li>
            <li>🛡️ <a href="#">Security Best Practices</a></li>
          </ul>
          <div className="doc-resources">
            <button className="btn-primary">Read Full Docs</button>
            <button className="btn-secondary">Watch Tutorials</button>
          </div>
        </div>
      )}

      {/* Smart Contracts Tab */}
      {selectedTab === "contracts" && (
        <div className="tab-content">
          <h2>🛠️ Smart Contract Interaction Tools</h2>
          <p>Deploy, manage, and interact with smart contracts seamlessly.</p>
          <div className="contract-actions">
            <button className="btn-primary">🚀 Deploy New Contract</button>
            <button className="btn-secondary">🔄 Interact with Contract</button>
          </div>
          <div className="grid">
            <div className="card">
              <h3>📦 Prebuilt Templates</h3>
              <p>Choose from prebuilt contract templates to get started quickly.</p>
              <button className="btn-secondary">Browse Templates</button>
            </div>
            <div className="card">
              <h3>🔍 Debugging Tools</h3>
              <p>Advanced debugging and monitoring tools for your contracts.</p>
              <button className="btn-secondary">View Debugger</button>
            </div>
          </div>
        </div>
      )}

      {/* APIs Tab */}
      {selectedTab === "apis" && (
        <div className="tab-content">
          <h2>🔌 API Reference & Integrations</h2>
          <p>Powerful APIs for interacting with blockchain and smart contracts.</p>
          <ul className="api-list">
            <li>🔑 Authentication API</li>
            <li>⚙️ Blockchain Interaction API</li>
            <li>📊 Market Data API</li>
            <li>💳 Transaction API</li>
            <li>👤 Account API</li>
          </ul>
          <p>
            Get full API documentation <a href="/docs" className="link">here</a>.
          </p>
          <div className="api-actions">
            <button className="btn-primary">📜 Read API Docs</button>
            <button className="btn-secondary">🔬 Test in Sandbox</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperTools;
