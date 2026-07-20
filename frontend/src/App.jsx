import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

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
        setApiMessage('Failed to connect to the backend API.');
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="app-container">
      <header className="hero">
        <nav className="navbar">
          <div className="logo">Motomod.lk</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Welcome to Motomod.lk</h1>
          <p>Your premium destination for auto parts and accessories</p>
          <button className="cta-button">Explore Products</button>
        </div>
      </header>

      <main className="main-content">
        <section className="api-status">
          <h2>Backend Status</h2>
          <div className={`status-badge ${apiMessage.includes('Failed') ? 'error' : 'success'}`}>
            {apiMessage}
          </div>
        </section>

        <section className="featured-section">
          <h2>Featured Categories</h2>
          <div className="grid-container">
            <div className="card">
              <h3>Engine Parts</h3>
              <p>High performance engine components.</p>
            </div>
            <div className="card">
              <h3>Exterior</h3>
              <p>Body kits, lights, and accessories.</p>
            </div>
            <div className="card">
              <h3>Interior</h3>
              <p>Premium seats, steering wheels, and more.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Motomod.lk. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
