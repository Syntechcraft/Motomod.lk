import React, { useState, useEffect } from 'react';


function Home() {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['EXPERIENCE', 'PERFORMANCE', 'LIFESTYLE', 'AESTHETICS'];

  const marqueeImages1 = [
    '/Suzuki-Symbol.png',
    '/WhatsApp Image 2026-07-21 at 3.39.40 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.40 PM (2).jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.40 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.41 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.42 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.42 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.43 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.43 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.44 PM (1).jpeg'
  ];

  const marqueeImages2 = [
    '/tvs-logo-tvs-icon-transparent-free-png.webp',
    '/WhatsApp Image 2026-07-21 at 3.39.44 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.45 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.45 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.46 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 3.39.46 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 8.55.07 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 8.55.07 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 8.55.08 PM.jpeg',
    '/WhatsApp Image 2026-07-21 at 8.55.09 PM (1).jpeg',
    '/WhatsApp Image 2026-07-21 at 8.55.09 PM.jpeg'
  ];

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

      {/* Image Marquee Gallery Section */}
      <section className="image-marquee-section">
        <div className="image-marquee-track reverse">
          {[...marqueeImages1, ...marqueeImages2, ...marqueeImages1, ...marqueeImages2].map((src, index) => (
            <div className="image-marquee-item" key={`row-${index}`}>
              <img src={src} alt="Gallery item" loading="lazy" />
            </div>
          ))}
        </div>
      </section>


    </>
  );
}

export default Home;
