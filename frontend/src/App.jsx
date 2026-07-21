import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [apiMessage, setApiMessage] = useState('Loading...');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const dropdownRef = useRef(null);

  const categories = ['All Categories', 'Exhausts', 'Helmets', 'Tires', 'Accessories'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
        <div className="top-strip">
          <div className="top-strip-left">
            <div className="top-strip-item">
              <svg className="phone-icon-small" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+94 77 123 4567</span>
            </div>
            <span className="top-strip-divider">|</span>
            <div className="top-strip-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>info@motomod.lk</span>
            </div>
          </div>
          <div className="top-strip-center">
            <div className="marquee-wrapper">
              <span className="marquee-item">ELEVATE YOUR RIDE WITH PREMIUM MOTORCYCLE ACCESSORIES.</span>
              <span className="marquee-item">FAST ISLANDWIDE DELIVERY IN SRI LANKA.</span>
              <span className="marquee-item">DISCOVER THE BEST DEALS ON RIDING GEAR.</span>
            </div>
            <div className="marquee-wrapper" aria-hidden="true">
              <span className="marquee-item">ELEVATE YOUR RIDE WITH PREMIUM MOTORCYCLE ACCESSORIES.</span>
              <span className="marquee-item">FAST ISLANDWIDE DELIVERY IN SRI LANKA.</span>
              <span className="marquee-item">DISCOVER THE BEST DEALS ON RIDING GEAR.</span>
            </div>
          </div>
          <div className="top-strip-right">
          </div>
        </div>

        <header className="site-header modern-glass">
          <div className="header-inner">
            <Link to="/" className="logo-link">
              <img src="/IMG_9475.PNG" alt="Motomod.lk Logo" className="logo" />
            </Link>

            <ul className="nav-links">
              <li><Link to="/" className="active">Home</Link></li>
              <li><a href="/#bike-items">Shop</a></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#contact">Contacts</a></li>
            </ul>

            <div className="header-actions">
              <div className="search-container">
                <div className="custom-dropdown" ref={dropdownRef}>
                  <div 
                    className="dropdown-selected" 
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    {selectedCategory}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e35205" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`chevron ${isCategoryOpen ? 'open' : ''}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  
                  {isCategoryOpen && (
                    <>

                      <ul className="dropdown-options" style={{ zIndex: 101 }}>
                        {categories.map((cat) => (
                          <li 
                            key={cat} 
                            className={selectedCategory === cat ? 'active' : ''}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setIsCategoryOpen(false);
                            }}
                          >
                            {cat}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <input type="text" placeholder="Search by Title, Brand ..." />
                <button className="search-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
              </div>

              <div className="header-icons">
                <a href="#" className="nav-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </a>
                <a href="#" className="nav-icon cart-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                  <span className="badge">0</span>
                </a>
              </div>
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
            <img src="/IMG_9475.PNG" alt="Motomod.lk Logo" className="footer-logo" />
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
