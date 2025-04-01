const API_URL = 'https://api.blockchain.com';

export const getNetworkStats = async () => {
  try {
    const response = await fetch(`${API_URL}/network/stats`);
    if (!response.ok) throw new Error('Failed to fetch network stats');
    return await response.json();
  } catch (error) {
    console.error('Error fetching network stats:', error);
    return null;
  }
};

export const getTransactionDetails = async (txId) => {
  try {
    const response = await fetch(`${API_URL}/transactions/${txId}`);
    if (!response.ok) throw new Error('Failed to fetch transaction details');
    return await response.json();
  } catch (error) {
    console.error('Error fetching transaction details:', error);
    return null;
  }
};

export const getBlockDetails = async (blockHash) => {
  try {
    const response = await fetch(`${API_URL}/blocks/${blockHash}`);
    if (!response.ok) throw new Error('Failed to fetch block details');
    return await response.json();
  } catch (error) {
    console.error('Error fetching block details:', error);
    return null;
  }
};

export const getSupportedTokens = async () => {
  try {
    const response = await fetch(`${API_URL}/tokens`);
    if (!response.ok) throw new Error('Failed to fetch supported tokens');
    return await response.json();
  } catch (error) {
    console.error('Error fetching supported tokens:', error);
    return [];
  }
};

export const getNFTs = async () => {
  try {
    const response = await fetch(`${API_URL}/nfts`);
    if (!response.ok) throw new Error('Failed to fetch NFTs');
    return await response.json();
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    return [];
  }
};

export const getStakingOpportunities = async () => {
  try {
    const response = await fetch(`${API_URL}/staking`);
    if (!response.ok) throw new Error('Failed to fetch staking opportunities');
    return await response.json();
  } catch (error) {
    console.error('Error fetching staking opportunities:', error);
    return [];
  }
};

export const sendTransaction = async (fromAddress, toAddress, amount, token) => {
  try {
    const response = await fetch(`${API_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: toAddress,
        amount: amount,
        token: token,
      }),
    });
    if (!response.ok) throw new Error('Failed to send transaction');
    return await response.json();
  } catch (error) {
    console.error('Error sending transaction:', error);
    return null;
  }
};
