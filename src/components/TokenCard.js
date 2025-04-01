import React from "react";
import "./TokenCard.css";

const TokenCard = ({ asset, onClick }) => {
  return (
    <div className="token-card" onClick={onClick}>
      {/* <img src={asset.imageUrl} alt={asset.name} className="token-image" /> */}
      <div className="token-info">
        <h3>{asset.name}</h3>
        <p className="token-description">{asset.description}</p>
        <div className="token-footer">
          <span className="token-price">💰 {asset.price}</span>
          <span className="token-owner">👤 {asset.owner}</span>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
