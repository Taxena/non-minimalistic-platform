import React, { useState, useEffect } from "react";
import TokenCard from "../components/TokenCard";
import AssetDetail from "../components/AssetDetail";
import "./Marketplace.css";

const Marketplace = () => {
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [activityFeed, setActivityFeed] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5);

  useEffect(() => {
    const mockAssets = [
      { id: 1, name: "CryptoArt NFT #001", description: "Unique digital art.", price: 0.5, owner: "0x1234...abcd", category: "Art" },
      { id: 2, name: "DeFi Token #002", description: "Valuable DeFi token.", price: 1.0, owner: "0x5678...efgh", category: "DeFi" },
      { id: 3, name: "Virtual Land Plot #003", description: "Metaverse real estate.", price: 2.0, owner: "0x9abc...ijkl", category: "Land" },
      { id: 4, name: "Metaverse Avatar #004", description: "Exclusive avatar.", price: 0.8, owner: "0xdefg...mnop", category: "Collectibles" },
      { id: 5, name: "Legendary Sword #005", description: "Gaming asset.", price: 3.2, owner: "0x4455...zzzz", category: "Gaming" },
      { id: 6, name: "Rare Music Track #006", description: "Exclusive song NFT.", price: 0.6, owner: "0x8888...yyyy", category: "Music" },
      { id: 7, name: "Pixel Art #007", description: "Limited edition pixel art.", price: 1.3, owner: "0x7777...xxxx", category: "Art" },
      { id: 8, name: "Digital Collectible #008", description: "Exclusive collectible.", price: 2.5, owner: "0x3333...wwww", category: "Collectibles" },
      { id: 9, name: "AI-Generated Art #009", description: "AI-crafted masterpiece.", price: 5.0, owner: "0x9999...qqqq", category: "Art" },
    ];

    setAssets(mockAssets);
    setFilteredAssets(mockAssets);

    setActivityFeed([
      "User 0x1234 bought CryptoArt NFT #001 for 0.5 ETH",
      "User 0x5678 listed DeFi Token #002 for 1.0 ETH",
      "User 0x9abc bought Virtual Land Plot #003 for 2.0 ETH",
    ]);
  }, []);

  useEffect(() => {
    const filtered = assets.filter(
      (asset) =>
        (selectedCategory === "All" || asset.category === selectedCategory) &&
        asset.price <= maxPrice
    );
    setFilteredAssets(filtered);
  }, [selectedCategory, maxPrice, assets]);

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedAsset(null);
  };

  return (
    <div className="marketplace-container">
      <header className="marketplace-header">
        <h1>🚀 NFT & Token Marketplace</h1>
        <p>Buy, sell, and explore a vast collection of exclusive digital assets.</p>
      </header>

      <div className="featured-banner">
        <h2>🔥 Featured Collection: "Metaverse Edition"</h2>
        <p>Exclusive drops happening now!</p>
      </div>

      <div className="filters">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="filter-dropdown">
          <option value="All">All Categories</option>
          <option value="Art">Art</option>
          <option value="DeFi">DeFi</option>
          <option value="Land">Land</option>
          <option value="Gaming">Gaming</option>
          <option value="Music">Music</option>
          <option value="Collectibles">Collectibles</option>
        </select>

        <div className="filter-slider">
          <label>Max Price: {maxPrice} ETH</label>
          <input type="range" min="0.1" max="5" step="0.1" value={maxPrice} onChange={(e) => setMaxPrice(parseFloat(e.target.value))} />
        </div>
      </div>

      <div className="asset-listing">
        {filteredAssets.map((asset) => (
          <TokenCard key={asset.id} asset={asset} />
        ))}
      </div>

      <div className="activity-feed">
        <h3>📢 Latest Activity</h3>
        <ul>
          {activityFeed.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>

      <div className="top-sellers">
        <h3>🏆 Top Sellers</h3>
        <ul>
          <li>0x5678...efgh - 10 ETH sold</li>
          <li>0x9abc...ijkl - 8.5 ETH sold</li>
          <li>0x1234...abcd - 7 ETH sold</li>
        </ul>
      </div>

      {isDetailModalOpen && selectedAsset && (
        <div className="asset-detail-modal">
          <div className="modal-content">
            <AssetDetail asset={selectedAsset} />
            <button className="close-modal" onClick={closeDetailModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
