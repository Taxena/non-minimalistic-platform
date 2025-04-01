import React, { useState, useEffect } from 'react';
import TokenCard from '../components/TokenCard';
import './Wallet.css';

const Wallet = () => {
  const [walletData, setWalletData] = useState({
    balance: 5000,
    tokens: [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        amount: 1.2,
        price: 50000,
        imageUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        description: 'The first and largest cryptocurrency.',
        owner: 'You'
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        amount: 15.4,
        price: 3000,
        imageUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        description: 'Smart contract blockchain platform.',
        owner: 'You'
      },
      {
        name: 'Solana',
        symbol: 'SOL',
        amount: 320,
        price: 100,
        imageUrl: 'https://cryptologos.cc/logos/solana-sol-logo.png',
        description: 'High-speed blockchain for decentralized apps.',
        owner: 'You'
      },
    ],
    transactionHistory: [
      { id: 1, date: '2025-01-05', amount: '-0.2 BTC', status: 'Completed' },
      { id: 2, date: '2025-01-04', amount: '+1.0 ETH', status: 'Completed' },
      { id: 3, date: '2025-01-02', amount: '-5 SOL', status: 'Pending' },
    ],
  });

  const handleSend = () => {
    console.log('Send functionality triggered');
  };

  const handleReceive = () => {
    console.log('Receive functionality triggered');
  };

  const handleTokenClick = (token) => {
    alert(`Token: ${token.name}\nPrice: $${token.price}\nOwned by: ${token.owner}`);
  };

  return (
    <div className="wallet-container">
      <h1 className="wallet-title">Wallet Management</h1>

      <div className="wallet-summary">
        <div className="wallet-balance">
          <h2 className="wallet-balance-title">Total Balance</h2>
          <p className="wallet-balance-amount">${walletData.balance}</p>
        </div>

        <div className="wallet-stats">
          <h2 className="wallet-stats-title">Quick Stats</h2>
          <ul>
            <li>Total Tokens: {walletData.tokens.length}</li>
            <li>Last Transaction: {walletData.transactionHistory[0].date}</li>
            <li>Pending Transactions: {
              walletData.transactionHistory.filter(tx => tx.status === 'Pending').length
            }</li>
          </ul>
        </div>
      </div>

      <div className="wallet-tokens">
        <h2 className="wallet-tokens-title">Your Tokens</h2>
        <div className="tokens-list">
          {walletData.tokens.map((token, index) => (
            <TokenCard key={index} asset={token} onClick={() => handleTokenClick(token)} />
          ))}
        </div>
      </div>

      <div className="wallet-market">
        <h2 className="wallet-market-title">Market Overview</h2>
        <div className="market-tokens">
          {walletData.tokens.map((token, index) => (
            <div key={index} className="market-card">
              <h3>{token.name} ({token.symbol})</h3>
              <p>Current Price: ${token.price}</p>
              <p>Holdings Value: ${(token.amount * token.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wallet-transactions">
        <h2 className="wallet-transactions-title">Transaction History</h2>
        <ul className="transactions-list">
          {walletData.transactionHistory.map((tx) => (
            <li key={tx.id} className={`transaction-item ${tx.status.toLowerCase()}`}>
              <span className="transaction-date">{tx.date}</span>
              <span className="transaction-amount">{tx.amount}</span>
              <span className="transaction-status">{tx.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="wallet-actions">
        <button className="wallet-action-btn send" onClick={handleSend}>Send</button>
        <button className="wallet-action-btn receive" onClick={handleReceive}>Receive</button>
      </div>
    </div>
  );
};

export default Wallet;
