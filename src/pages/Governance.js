import React, { useState, useEffect } from "react";
import "./Governance.css";

const Governance = () => {
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [isVotingOpen, setIsVotingOpen] = useState(false);

  useEffect(() => {
    setProposals([
      {
        id: 1,
        title: "🚀 Upgrade Network Speed",
        description:
          "Enhance network speed by implementing Layer 2 scaling. This will improve transaction throughput and reduce fees.",
        status: "Open",
        votesFor: 1500,
        votesAgainst: 200,
      },
      {
        id: 2,
        title: "💰 Add New Staking Rewards",
        description:
          "Introduce higher staking rewards for long-term holders to incentivize participation in governance.",
        status: "Closed",
        votesFor: 1200,
        votesAgainst: 300,
      },
      {
        id: 3,
        title: "🔒 Improve Smart Contract Security",
        description:
          "Implement additional audits and bug bounties to ensure the security of smart contracts.",
        status: "Open",
        votesFor: 1800,
        votesAgainst: 250,
      },
    ]);
  }, []);

  const handleProposalClick = (proposal) => {
    setSelectedProposal(proposal);
  };

  const handleVote = (vote) => {
    setIsVotingOpen(false);
    alert(`✅ You voted: ${vote}`);
  };

  return (
    <div className="governance-container">
      <h1 className="governance-title">🌟 Community Hub</h1>

      {/* Proposals */}
      <section className="proposals-section">
        <h2>🔥 Current Proposals</h2>
        <div className="proposals-list">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className={`proposal-card ${proposal.status === "Open" ? "open" : "closed"}`}
              onClick={() => handleProposalClick(proposal)}
            >
              <h3>{proposal.title}</h3>
              <p>{proposal.description}</p>
              <p>Status: <span className={proposal.status === "Open" ? "status-open" : "status-closed"}>{proposal.status}</span></p>
              <p>✅ {proposal.votesFor} | ❌ {proposal.votesAgainst}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Voting Popup */}
      {selectedProposal && isVotingOpen && (
        <div className="voting-modal">
          <h2>🗳️ Vote on Proposal</h2>
          <p>{selectedProposal.title}</p>
          <div className="vote-options">
            <button className="vote-for" onClick={() => handleVote("For")}>✅ Vote For</button>
            <button className="vote-against" onClick={() => handleVote("Against")}>❌ Vote Against</button>
            <button className="cancel-vote" onClick={() => setIsVotingOpen(false)}>❌ Cancel</button>
          </div>
        </div>
      )}

      {/* Proposal Details */}
      {selectedProposal && !isVotingOpen && (
        <section className="proposal-detail-section">
          <h2>{selectedProposal.title}</h2>
          <p>{selectedProposal.description}</p>
          <p>Status: <span className={selectedProposal.status === "Open" ? "status-open" : "status-closed"}>{selectedProposal.status}</span></p>
          <p>✅ {selectedProposal.votesFor} | ❌ {selectedProposal.votesAgainst}</p>
          {selectedProposal.status === "Open" && (
            <button className="vote-button" onClick={() => setIsVotingOpen(true)}>Vote Now</button>
          )}
        </section>
      )}

      <section className="support-cards">
        {/* Trending Discussions */}
        <section className="trending-section">
          <h2>🔥 Trending Discussions</h2>
          <ul>
            <li>⚡ Is Layer 3 the future of scaling?</li>
            <li>🛠️ Best practices for DAO governance</li>
            <li>📈 Market trends for crypto adoption in 2025</li>
          </ul>
        </section>

        {/* Featured Members */}
        <section className="members-section">
          <h2>🏆 Featured Members</h2>
          <ul>
            <li>👑 @CryptoKing</li>
            <li>🚀 @DeFiWarrior</li>
            <li>🔗 @SmartContractWizard</li>
          </ul>
        </section>

        {/* Community Links */}
        <section className="community-section">
          <h2>🌍 Community Engagement</h2>
          <ul>
            <li><a href="/roadmap">📜 Roadmap Updates</a></li>
            <li><a href="/forum">💬 Community Forum</a></li>
            <li><a href="/dao">🏛️ Participate in DAO</a></li>
          </ul>
        </section>
      </section>

    </div>
  );
};

export default Governance;
