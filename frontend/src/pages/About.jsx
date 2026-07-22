import React from 'react';

function About() {
  return (
    <div className="shop-page-wrapper">
      {/* Hero Banner Section */}
      <section className="shop-hero">
        <div className="shop-hero-content centered-hero">
          <div className="hero-subtitle">MOTOMOD <span style={{ color: 'var(--primary-color)' }}>ABOUT</span></div>
          <h1 className="modern-title">
            <span className="welcome-text">Who We </span>
            <span className="text-highlight">Are.</span>
          </h1>
          <p className="hero-desc" style={{ visibility: 'hidden', userSelect: 'none' }}>Learn more about our passion for motorcycles and commitment to premium quality.</p>
        </div>
      </section>

      {/* Promo Grid Section */}
      <section className="shop-promo-grid">
        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">Motomod</div>
            <div className="shop-promo-title">FAST DELIVERY</div>
            <div className="shop-promo-desc">
              Get your gear fast with our reliable, island-wide delivery service straight to your doorstep.
            </div>
          </div>
        </div>
        
        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">Motomod</div>
            <div className="shop-promo-title">PREMIUM QUALITY</div>
            <div className="shop-promo-desc">
              We guarantee 100% authentic, top-tier motorcycle parts and accessories for your ride.
            </div>
          </div>
        </div>

        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">Motomod</div>
            <div className="shop-promo-title">EXPERT SUPPORT</div>
            <div className="shop-promo-desc">
              Need help? Our technical team provides expert guidance and 24/7 customer support.
            </div>
          </div>
        </div>
      </section>

      <div style={{ padding: '0 5% 60px', display: 'flex', justifyContent: 'center' }}>
        <section className="about-section" id="about" style={{ margin: '0 auto', width: '100%', maxWidth: '1200px' }}>
          <div className="about-content">
            <h3>Premium Auto Parts at its finest</h3>
            <p>We are dedicated to providing the highest quality automotive components to enthusiasts and everyday drivers alike. Our carefully curated selection ensures your vehicle performs at its peak. Join thousands of satisfied customers who trust Motomod.lk.</p>
            
            <div className="about-stats">
              <div className="stat-box">
                <h4>100+</h4>
                <p>Total Products</p>
              </div>
              <div className="stat-box">
                <h4>1000+</h4>
                <p>Happy Customers</p>
              </div>
              <div className="stat-box">
                <h4>20+</h4>
                <p>Brands Partnered</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=600&auto=format&fit=crop" alt="Mechanic team" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
