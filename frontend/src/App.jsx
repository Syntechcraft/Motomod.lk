import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [apiMessage, setApiMessage] = useState('Loading...');

  useEffect(() => {
    // Fetch data from our Node.js backend
    const fetchApi = async () => {
      try {
        const url = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const response = await axios.get(url);
        setApiMessage(response.data);
      } catch (error) {
        console.error('Error fetching API:', error);
        setApiMessage('Failed to connect to backend.');
      }
    };

    fetchApi();
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <header className="site-header">
          {/* Middle Bar */}
          <div className="middle-bar">
            <Link to="/" className="logo-link">
              <img src="/IMG_9475-Photoroom.png" alt="Motomod.lk Logo" className="logo" />
            </Link>

            <div className="search-container">
              <input type="text" placeholder="Search by Title, Brand, Category ..." />
              <button className="search-btn">SEARCH</button>
            </div>

            <div className="helpline">
              <svg className="phone-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div className="helpline-text">
                <span className="helpline-label">Helpline:</span>
                <span className="helpline-number">0 (800) 423-754</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bottom-bar">
            <ul className="nav-links">
              <li><Link to="/" className="active">Home</Link></li>
              <li><a href="/#bike-items">Shop</a></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#contact">Contacts</a></li>
            </ul>

            <div className="bottom-bar-icons">
              <a href="#" className="nav-icon" title="Login / Register">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </a>
              <a href="#" className="nav-icon cart-icon" title="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <span className="badge">0</span>
                <span className="cart-total">Rs. 0.00</span>
              </a>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="footer" id="contact">
          <div>
            <img src="/IMG_9475-Photoroom.png" alt="Motomod.lk Logo" className="footer-logo" />
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              Built For Riders. Your premium destination for high-quality auto parts and accessories. Elevate your ride with us.
            </p>
            <div className="social-links">
              <span>F</span>
              <span>I</span>
              <span>T</span>
              <span>Y</span>
            </div>
          </div>
          
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#bike-items">Shop</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Contact Info</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Email: info@motomod.lk</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Phone: +94 77 123 4567</p>
            <p style={{ fontSize: '0.9rem', opacity: '0.8', marginTop: '1rem' }}>API Status: {apiMessage}</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
