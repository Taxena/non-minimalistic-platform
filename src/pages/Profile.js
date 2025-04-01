import React, { useState, useEffect } from "react";
import "./Profile.css";
import { FaUserEdit, FaKey, FaLock, FaHistory } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    username: "User123",
    email: "user123@example.com",
    walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
    activityHistory: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    setUser((prevUser) => ({
      ...prevUser,
      activityHistory: [
        { date: "2025-01-01", action: "Staked 10 ETH" },
        { date: "2025-01-03", action: "Transferred 5 ETH to Wallet X" },
        { date: "2025-01-05", action: "Updated security settings" },
        { date: "2025-01-07", action: "Connected new wallet" },
      ],
    }));
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUser((prevUser) => ({ ...prevUser, username: newUsername }));
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Account Settings</h1>

      {/* Profile Details */}
      <section className="profile-details">
        <h2><FaUserEdit /> Profile Details</h2>
        <div className="profile-info">
          <p>
            <strong>Username:</strong>{" "}
            {isEditing ? (
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="input-field"
              />
            ) : (
              user.username
            )}
          </p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Wallet Address:</strong> {user.walletAddress}</p>

          <button onClick={handleEditClick} className="edit-btn">
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
          {isEditing && <button onClick={handleSave} className="save-btn">Save</button>}
        </div>
      </section>

      {/* Activity History */}
      <section className="activity-section">
        <h2><FaHistory /> Activity History</h2>
        <ul>
          {user.activityHistory.map((activity, index) => (
            <li key={index} className="activity-item">
              <p>{activity.date}: {activity.action}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Security Settings */}
      <section className="security-section">
        <h2><FaLock /> Security Settings</h2>
        <div className="security-options">
          <p><strong>2FA:</strong> Enabled</p>
          <p>
            <strong>API Key:</strong>{" "}
            <span className="api-key">
              {showApiKey ? "abcd-efgh-ijkl-mnop" : "************"}
            </span>
            <button onClick={() => setShowApiKey(!showApiKey)} className="toggle-key-btn">
              {showApiKey ? "Hide" : "Show"}
            </button>
          </p>
          <button className="change-2fa-btn"><FaKey /> Change 2FA</button>
        </div>
      </section>
    </div>
  );
};

export default Profile;
