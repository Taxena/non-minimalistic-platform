// src/utils/formatters.js

// Format numbers with commas as thousand separators (e.g., 1,000,000)
export const formatNumber = (number) => {
  if (typeof number !== 'number') return number;
  return number.toLocaleString();
};

// Format token values with a specified number of decimal places
export const formatTokenAmount = (amount, decimals = 6) => {
  if (isNaN(amount)) return '0.000000';
  return parseFloat(amount).toFixed(decimals);
};

// Format large numbers like total value locked (TVL) or market cap
export const formatLargeNumber = (number) => {
  if (number >= 1e9) return (number / 1e9).toFixed(2) + 'B';  // Billions
  if (number >= 1e6) return (number / 1e6).toFixed(2) + 'M';  // Millions
  if (number >= 1e3) return (number / 1e3).toFixed(2) + 'K';  // Thousands
  return number.toString();
};

// Format a date to a human-readable format (e.g., Jan 1, 2025)
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

// Format a blockchain address (truncate long addresses for display)
export const formatAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// Format transaction fees (with symbol, e.g., 0.0005 ETH)
export const formatTransactionFee = (fee, tokenSymbol = 'ETH') => {
  if (isNaN(fee)) return '0.0000 ' + tokenSymbol;
  return parseFloat(fee).toFixed(4) + ' ' + tokenSymbol;
};

// Format block details (e.g., hash, miner, etc.)
export const formatBlockDetail = (blockDetail) => {
  return {
    hash: blockDetail.hash.slice(0, 6) + '...' + blockDetail.hash.slice(-4),  // Shortened hash
    miner: blockDetail.miner.slice(0, 6) + '...' + blockDetail.miner.slice(-4), // Shortened miner address
    size: formatNumber(blockDetail.size),
    time: formatDate(blockDetail.timestamp),
    transactionCount: formatNumber(blockDetail.tx_count),
  };
};
