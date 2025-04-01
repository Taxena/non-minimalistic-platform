// src/utils/constants.js

// Base URL for the blockchain API
export const API_URL = 'https://api.blockchain.com';  // Replace with your actual blockchain API endpoint

// Supported token symbols
export const SUPPORTED_TOKENS = ['ETH', 'BTC', 'USDT', 'BNB', 'ADA']; // Add your supported tokens

// Default network settings
export const NETWORK = {
  name: 'Ethereum',  // Blockchain name
  chainId: 1,  // Ethereum Mainnet
  rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',  // Replace with your RPC provider URL
};

// Wallet Management settings
export const WALLET = {
  minSendAmount: 0.001,  // Minimum amount for sending transactions (e.g., 0.001 ETH)
  transactionFee: 0.0005,  // Default transaction fee (can be dynamic based on network congestion)
};

// Staking settings
export const STAKING = {
  minStakingAmount: 0.1,  // Minimum amount required to stake (e.g., 0.1 ETH)
  rewardPeriod: '30 days',  // The reward period for staking (e.g., monthly rewards)
  maxStakingDuration: 365,  // Maximum staking duration (e.g., 365 days)
};

// Governance settings
export const GOVERNANCE = {
  proposalThreshold: 1000,  // Minimum number of votes required to pass a proposal
  votingPeriod: 7,  // Voting period in days
};

// API endpoints for specific functionalities
export const API_ENDPOINTS = {
  networkStats: `${API_URL}/network/stats`,
  transactions: `${API_URL}/transactions`,  // Get transaction by ID
  blocks: `${API_URL}/blocks`,  // Get block by hash
  nfts: `${API_URL}/nfts`,  // Get NFT details
  stakingOpportunities: `${API_URL}/staking`,  // Get staking opportunities
  supportedTokens: `${API_URL}/tokens`,  // Get list of supported tokens
  sendTransaction: `${API_URL}/send`,  // Send transaction endpoint
};

// Example of a predefined list of staking pools (you can replace it with dynamic data from the blockchain)
export const STAKING_POOLS = [
  {
    id: 1,
    name: 'ETH Staking Pool',
    description: 'Stake your ETH to earn rewards.',
    apr: 6.5,  // Annual Percentage Rate (APR)
    minAmount: 0.1,  // Minimum staking amount (ETH)
    maxAmount: 1000,  // Maximum staking amount (ETH)
    status: 'active',  // active, inactive
  },
  {
    id: 2,
    name: 'ADA Staking Pool',
    description: 'Stake your ADA to earn rewards.',
    apr: 4.0,
    minAmount: 10,  // Minimum staking amount (ADA)
    maxAmount: 5000,  // Maximum staking amount (ADA)
    status: 'active',
  },
  // Add more pools as needed
];

// Default values for the Dashboard statistics (optional for your design)
export const DASHBOARD_STATS = {
  totalValueLocked: 1500000,  // Example value in USD
  transactionsPerSecond: 1200,  // Example value for TPS (Transactions Per Second)
  activeUsers: 3500,  // Example active users count
  newTransactions: 45000,  // Example new transactions in the last 24 hours
};
