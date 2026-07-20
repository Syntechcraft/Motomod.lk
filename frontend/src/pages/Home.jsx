import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <div className="hero-subtitle">Upgrading The Experience</div>
          <h1>WELCOME TO<br/>MOTOMOD</h1>
          <p>Your one-stop destination for procuring top-tier auto components. Enhance your vehicle's performance and aesthetics with our curated selection of parts.</p>
          <a href="/#bike-items" className="btn btn-primary">View All Products</a>
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
