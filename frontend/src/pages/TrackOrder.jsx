import React, { useState } from 'react';
import '../index.css';

function TrackOrder() {
  const [waybill, setWaybill] = useState('');
  const [phone, setPhone] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    // Tracking logic goes here
    console.log("Tracking:", waybill, phone);
  };

  return (
    <div className="shop-page-wrapper">
      {/* Hero Banner Section */}
      <section className="shop-hero track-hero">
        <div className="shop-hero-content centered-hero">
          <div className="hero-subtitle">MOTOMOD <span style={{ color: 'var(--primary-color)' }}>TRACKING</span></div>
          <h1 className="modern-title">
            <span className="welcome-text">Track Your </span>
            <span className="text-highlight">Order.</span>
          </h1>
          <p className="hero-desc" style={{ visibility: 'hidden', userSelect: 'none' }}>Track the status of your premium gear.</p>
        </div>
      </section>

      {/* Tracking Form Section */}
      <section style={{ padding: '6rem 5%', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
        <div className="track-order-container">
          <form className="track-form" onSubmit={handleTrack}>
            <div className="track-input-row">
              <div className="track-input-group">
                <label>WAYBILL / BARCODE NUMBER</label>
                <input 
                  type="text" 
                  placeholder="e.g. 987654321" 
                  value={waybill}
                  onChange={(e) => setWaybill(e.target.value)}
                  required
                />
              </div>
              <div className="track-input-group">
                <label>PHONE NUMBER</label>
                <input 
                  type="text" 
                  placeholder="07X XXX XXXX" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <p className="track-note">Phone number is required to verify orders.</p>
            
            <button type="submit" className="btn btn-primary btn-hover-black" style={{ width: '60%', minWidth: '250px', alignSelf: 'center', marginTop: '1rem' }}>TRACK ORDER</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default TrackOrder;
