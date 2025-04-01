import React from 'react';
import './AssetDetail.css';

const AssetDetail = ({ asset }) => {
  return (
    <div className="asset-detail-container">
      <div className="asset-detail-header">
        <img src={asset.logo} alt={`${asset.name} logo`} className="asset-detail-logo" />
        <div className="asset-detail-info">
          <h1 className="asset-detail-name">{asset.name}</h1>
          <p className="asset-detail-symbol">{asset.symbol}</p>
          <p className="asset-detail-price">{asset.price}</p>
        </div>
      </div>

      <div className="asset-detail-body">
        <div className="asset-detail-section">
          <h2 className="section-title">Ownership</h2>
          <p className="asset-detail-ownership">Owner: {asset.owner}</p>
          <p className="asset-detail-transaction-count">Transactions: {asset.transactions}</p>
        </div>

        <div className="asset-detail-section">
          <h2 className="section-title">Transaction History</h2>
          <ul className="asset-detail-transactions">
            {asset.transactionsHistory.map((tx, index) => (
              <li key={index} className="transaction-item">
                <span className="transaction-id">TX #{tx.id}</span> - {tx.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssetDetail;
