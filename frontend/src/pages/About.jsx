import React from 'react';
import { Link } from 'react-router-dom';

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


      {/* About Company Section */}
      <section className="about-company-section">
        <div className="about-company-left">
          <div className="about-vertical-text">MOTOMOD</div>
          <div className="about-images-wrapper">
            <img src="/about_main.png" alt="Mechanic working on bike" className="about-main-img" />
            <img src="/about_sub.png" alt="Motorcycle Parts" className="about-sub-img" />
            <div className="about-badge">
              Premium Custom Mods
            </div>
          </div>
        </div>

        <div className="about-company-right">
          <h2 className="about-company-title">Island's largest & trusted vehicle mod co.</h2>
          <p className="about-company-desc">
            We are passionate about bringing you the best vehicle modifications and premium accessories. With years of experience and a commitment to quality, we transform your ride into a masterpiece. Our team ensures every part meets the highest standards.
          </p>

          <div className="about-features-list">
            <div className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
              </div>
              <div className="about-feature-text">
                <h4>Expert Modifications</h4>
                <p>Professional modifications for enhanced performance and custom styling.</p>
              </div>
            </div>

            <div className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <div className="about-feature-text">
                <h4>Quality Productions</h4>
                <p>We source only 100% authentic and premium quality parts for your vehicle.</p>
              </div>
            </div>
          </div>

          <Link to="/shop" className="btn-discover">DISCOVER MORE</Link>
        </div>
      </section>

      {/* Promo Grid Section */}
      <section className="shop-promo-grid">
        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">MOTOMOD</div>
            <div className="shop-promo-title">CUSTOM BUILDS</div>
            <div className="shop-promo-desc">
              We provide bespoke custom builds tailored exactly to your vision and riding style.
            </div>
          </div>
        </div>

        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">MOTOMOD</div>
            <div className="shop-promo-title">PREMIUM QUALITY</div>
            <div className="shop-promo-desc">
              We guarantee 100% authentic, top-tier motorcycle parts and accessories for your ride.
            </div>
          </div>
        </div>

        <div className="shop-promo-card" style={{ cursor: 'default' }}>
          <div className="shop-promo-content">
            <div className="shop-promo-label">MOTOMOD</div>
            <div className="shop-promo-title">EXPERT SUPPORT</div>
            <div className="shop-promo-desc">
              Need help? Our technical team provides expert guidance and 24/7 customer support.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
