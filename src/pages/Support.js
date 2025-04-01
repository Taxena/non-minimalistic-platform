import React, { useState } from "react";
import "./Support.css";

const Support = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="support-container">
      <h1 className="support-title">🚀 Support & Documentation</h1>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>🛠 Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>💰 How do I set up my wallet?</h3>
          <p>Follow our detailed guide on setting up a wallet to securely store and manage your assets.</p>
        </div>
        <div className="faq-item">
          <h3>🔄 How do I send tokens to another wallet?</h3>
          <p>Check out our guide for sending tokens, including tips on managing gas fees and transaction speed.</p>
        </div>
        <div className="faq-item">
          <h3>🔑 How can I recover my lost wallet?</h3>
          <p>If you’ve lost access, refer to our recovery steps and security protocols.</p>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="tutorials-section">
        <h2>📚 Tutorials</h2>
        <ul>
          <li><a href="/tutorial-wallet-setup" className="link">🔹 Wallet Setup Guide</a></li>
          <li><a href="/tutorial-sending-tokens" className="link">🔹 Sending Tokens Tutorial</a></li>
          <li><a href="/tutorial-dapp-integration" className="link">🔹 Integrating with DApps</a></li>
        </ul>
      </section>

      {/* Contact Support */}
      <section className="contact-support-section">
        <h2>📞 Contact Support</h2>
        <p>Need assistance? Our team is ready to help!</p>
        <button className="contact-button" onClick={toggleChat}>
          {isChatOpen ? "❌ Close Chat" : "💬 Open Live Chat"}
        </button>
      </section>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>🎧 Live Support</h3>
            <button className="close-chat" onClick={toggleChat}>❌</button>
          </div>
          <div className="chat-body">
            <p>👋 Welcome! How can we assist you today?</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
