import React, { useState, useEffect } from 'react';

function Home() {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['EXPERIENCE', 'PERFORMANCE', 'LIFESTYLE', 'AESTHETICS'];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  const handleTyping = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setCurrentWord(isDeleting ? fullText.substring(0, currentWord.length - 1) : fullText.substring(0, currentWord.length + 1));

    setTypingSpeed(isDeleting ? 50 : 150);

    if (!isDeleting && currentWord === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentWord === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content centered-hero">
          <div className="hero-subtitle">ELEVATING YOUR <span style={{ color: 'var(--primary-color)' }}>{currentWord}</span><span style={{ borderRight: '2px solid var(--primary-color)', animation: 'blink 1s step-end infinite' }}>&nbsp;</span></div>
          <h1 className="modern-title">
            <span className="welcome-text">Welcome to </span>
            <span className="text-highlight">Motomod.</span>
          </h1>
          <p className="hero-desc">Your ultimate hub for next-gen auto components. Push the limits of performance and redefine your vehicle's aesthetics.</p>
          <div className="hero-action-buttons">
            <a href="/#bike-items" className="btn btn-primary">VIEW ALL PRODUCTS</a>
          </div>
        </div>
      </header>

      {/* Bike Modification Items Section */}
      <section className="bike-items-section" id="bike-items">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-dark)', fontWeight: '800' }}>Fresh Arrivals For Your Ride</h2>

        <div className="bike-product-grid">
          {/* Card 1 */}
          <div className="bike-card">
            <div className="bike-image-wrapper">
              <img src="/bike_exhaust.png" alt="Carbon Fiber Exhaust" />
            </div>
            <div className="bike-card-body">
              <div className="bike-brand">Akrapovic</div>
              <p className="bike-desc">Premium Carbon Fiber Slip-on Exhaust</p>
              <div className="bike-price-rating">
                <span className="bike-price">Rs. 45,000</span>
              </div>
              <div className="bike-actions">
                <button className="btn-buy">BUY NOW</button>
                <button className="btn-details">DETAILS</button>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bike-card">
            <div className="bike-image-wrapper">
              <img src="/bike_tire.png" alt="Racing Tire" />
            </div>
            <div className="bike-card-body">
              <div className="bike-brand">Pirelli</div>
              <p className="bike-desc">Diablo Supercorsa SP V3 Racing Tire</p>
              <div className="bike-price-rating">
                <span className="bike-price">Rs. 32,000</span>
              </div>
              <div className="bike-actions">
                <button className="btn-buy">BUY NOW</button>
                <button className="btn-details">DETAILS</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bike-card">
            <div className="bike-image-wrapper">
              <img src="/bike_suspension.png" alt="Rear Suspension" />
            </div>
            <div className="bike-card-body">
              <div className="bike-brand">Ohlins</div>
              <p className="bike-desc">TTX GP Rear Shock Absorber</p>
              <div className="bike-price-rating">
                <span className="bike-price">Rs. 120,000</span>
              </div>
              <div className="bike-actions">
                <button className="btn-buy">BUY NOW</button>
                <button className="btn-details">DETAILS</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bike-card">
            <div className="bike-image-wrapper">
              <img src="/bike_brake.png" alt="Brake Caliper" />
            </div>
            <div className="bike-card-body">
              <div className="bike-brand">Brembo</div>
              <p className="bike-desc">GP4-RX Billet Radial Brake Caliper</p>
              <div className="bike-price-rating">
                <span className="bike-price">Rs. 85,000</span>
              </div>
              <div className="bike-actions">
                <button className="btn-buy">BUY NOW</button>
                <button className="btn-details">DETAILS</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
