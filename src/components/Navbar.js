import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../components/SearchBar';
import logoMin from '../images/LogoNonMin.png';
import { FaWallet } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// const handleSearch = (query) => {
//   console.log('Search for:', query);
// };

const Navbar = () => {
  return (
    <navbar className="navbar">
      <nav className="navigation">
        <ul>
          <li><Link to="/"><img className="logo" src={logoMin} alt="Logo" /></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/developer-tools">DevTools</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/governance">Community</Link></li>
          <li><Link to="/staking">Staking</Link></li>
        </ul>
      </nav>

      <nav className="navigation-icons">
        <ul>
          <li>
            <button><Link to="/explorer"><FaSearch className='icon' /></Link></button>
          </li>
          <li>
            <button><Link to="/profile"><FaUserAlt className='icon' /></Link></button>
            <span>Profile</span>
          </li>
          <li>
            <button><Link to="/wallet"><FaWallet className='icon' /></Link></button>
            <span>Wallet</span>
          </li>
        </ul>
      </nav>
    </navbar>
  );
};

export default Navbar;