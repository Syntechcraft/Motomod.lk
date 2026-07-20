import React from 'react';

function About() {
  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <section className="about-section" id="about" style={{ margin: '0 auto', width: '100%' }}>
        <div className="about-content">
          <h3>Premium Auto Parts at its finest</h3>
          <p>We are dedicated to providing the highest quality automotive components to enthusiasts and everyday drivers alike. Our carefully curated selection ensures your vehicle performs at its peak. Join thousands of satisfied customers who trust Motomod.lk.</p>
          
          <div className="about-stats">
            <div className="stat-box">
              <h4>500+</h4>
              <p>Total Products</p>
            </div>
            <div className="stat-box">
              <h4>1200+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="stat-box">
              <h4>50+</h4>
              <p>Brands Partnered</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=600&auto=format&fit=crop" alt="Mechanic team" />
        </div>
      </section>
    </div>
  );
}

export default About;
