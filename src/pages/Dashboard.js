import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import StatsCard from '../components/StatsCard';
import './Dashboard.css';
import HeaderHero from '../components/Header';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { LuBlocks } from "react-icons/lu";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbMoneybag } from "react-icons/tb";


const Dashboard = () => {
  const [stats, setStats] = useState({
    transactionsPerSecond: '1,234 TPS',
    totalValueLocked: '$1,000,000,000',
    activeUsers: '500,000',
  });

  const [news, setNews] = useState([
    { id: 1, title: 'New blockchain upgrade coming soon', date: '2025-01-07' },
    { id: 2, title: 'Ethereum network congestion reduced by 50%', date: '2025-01-05' },
  ]);

  return (
    <div className="dashboard-container">
      <HeaderHero />
      <div className="dashboard-container-inner">
        <h1 className="dashboard-title-main dashboard-title">Welcome to Your Blockchain Dashboard</h1>
        <div className="dashboard-stats">
          <StatsCard />
        </div>

        <div className="recent-blocks">
          <h2 className="dashboard-title">Recent Blocks</h2>
          <table className="blocks-table">
            <thead>
              <tr>
                <th>Block</th>
                <th>Timestamp</th>
                <th>Transactions</th>
                <th>Block Reward</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "#1234567",
                  time: "1 min ago",
                  transactions: 134,
                  reward: "2.3 ETH",
                },
                {
                  id: "#1234566",
                  time: "2 mins ago",
                  transactions: 98,
                  reward: "2.1 ETH",
                },
                {
                  id: "#1234565",
                  time: "5 mins ago",
                  transactions: 175,
                  reward: "2.4 ETH",
                },
                {
                  id: "#1234564",
                  time: "7 mins ago",
                  transactions: 120,
                  reward: "2.2 ETH",
                },
              ].map((block, index) => (
                <tr key={index}>
                  <td>{block.id}</td>
                  <td>{block.time}</td>
                  <td>{block.transactions}</td>
                  <td>{block.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="more-button">
            <Link to="/blocks" className="more-button-link">
              View More
            </Link>
          </button>
        </div>


        <div className="featured-nfts">
          <h2 className="dashboard-title">Featured NFTs</h2>
          <div className="nft-grid">
            {[
              {
                title: "Crypto Art #123",
                price: "0.5 ETH",
                owner: "JohnDoe",
                lastSale: "0.4 ETH",
                rarity: "Rare",
              },
              {
                title: "Crypto Art #124",
                price: "0.8 ETH",
                owner: "JaneSmith",
                lastSale: "0.7 ETH",
                rarity: "Legendary",
              },
              {
                title: "Crypto Art #125",
                price: "1.2 ETH",
                owner: "AliceCrypto",
                lastSale: "1.0 ETH",
                rarity: "Epic",
              },
              {
                title: "Crypto Art #126",
                price: "2.0 ETH",
                owner: "CryptoKing",
                lastSale: "1.8 ETH",
                rarity: "Rare",
              },
            ].map((nft, index) => (
              <div key={index} className="nft-card detailed">
                <div className="nft-preview">
                  <img
                    src={`https://via.placeholder.com/150?text=${nft.title}`}
                    alt={nft.title}
                    className="nft-image"
                  />
                </div>
                <h3 className="nft-title">{nft.title}</h3>
                <p className="nft-price">
                  <strong>Price:</strong> {nft.price}
                </p>
                <p className="nft-owner">
                  <strong>Owner:</strong> {nft.owner}
                </p>
                <p className="nft-last-sale">
                  <strong>Last Sale:</strong> {nft.lastSale}
                </p>
                <p className={`nft-rarity rarity-${nft.rarity.toLowerCase()}`}>
                  <strong>Rarity:</strong> {nft.rarity}
                </p>
              </div>
            ))}
          </div>
          <button className="more-button">
            <Link to="/staking" className="more-button-link">
              View More
            </Link>
          </button>
        </div>


        {/* News & Updates Section */}
        <div className="news-section">
          <h2 className="dashboard-title">Blockchain News & Updates</h2>
          <p className="section-description">
            Stay informed with the latest trends, announcements, and breaking news in the blockchain world.
            Here are the top stories curated just for you.
          </p>
          <div className="news-list-grid">
            {[
              {
                title: "Ethereum's Shanghai Upgrade Nears Completion",
                date: "2025-01-14",
                description: "The long-awaited Ethereum Shanghai upgrade is just around the corner, promising reduced gas fees and improved transaction speeds.",
              },
              {
                title: "Bitcoin Hits New All-Time High",
                date: "2025-01-13",
                description: "Bitcoin surges to a new record price, breaking expectations and drawing attention from mainstream investors.",
              },
              {
                title: "DeFi Protocol XYZ Reports $10M Hack",
                date: "2025-01-12",
                description: "A leading DeFi protocol suffered a major exploit, raising questions about security in decentralized finance.",
              },
              {
                title: "Layer-2 Solutions Gain Traction",
                date: "2025-01-11",
                description: "Layer-2 technologies continue to grow in popularity, enhancing scalability and reducing transaction fees on Ethereum.",
              },
              {
                title: "NFT Marketplace Launches Major Update",
                date: "2025-01-10",
                description: "A major NFT marketplace introduces new features, including fractional ownership and dynamic pricing models.",
              },
            ].map((news, index) => (
              <div key={index} className="news-card detailed">
                <div className="news-header">
                  <div className="news-date">{news.date}</div>
                  <h3 className="news-title">{news.title}</h3>
                </div>
                <p className="news-description">{news.description}</p>
                <button className="btn-read-more">
                  <Link to={`/news/${index}`} className="btn-read-more-link">Read More</Link>
                </button>
              </div>
            ))}
          </div>
          <button className="more-button">
            <Link to="/news" className="more-button-link">View All News</Link>
          </button>
        </div>



        <div className="quick-links-section">
          <h2 className="dashboard-title">Quick Links</h2>
          <div className="quick-links-grid">
            {[
              {
                title: "DevTools",
                icon: <MdOutlineAnalytics />,
                description: "Access developer tools for smart contracts and APIs.",
                link: "/developer-tools",
              },
              {
                title: "Support",
                icon: <IoIosSearch />,
                description: "Get assistance with troubleshooting and FAQs.",
                link: "/support",
              },
              {
                title: "Marketplace",
                icon: <TbWorld />,
                description: "Explore the NFT marketplace and decentralized exchanges.",
                link: "/marketplace",
              },
              {
                title: "Community",
                icon: <HiOutlineUserGroup />,
                description: "Join discussions and participate in governance activities.",
                link: "/governance",
              },
              {
                title: "Staking",
                icon: <TbMoneybag />,
                description: "Stake your assets and earn rewards securely.",
                link: "/staking",
              },
            ].map((link, index) => (
              <a key={index} href={link.link} className="quick-link-card">
                <div className="quick-link-icon">{link.icon}</div>
                <div className="quick-link-details">
                  <h3 className="quick-link-title">{link.title}</h3>
                  <p className="quick-link-description">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>


      </div>
    </div>

  );
};

export default Dashboard;
