import React from 'react';
    import { FaTractor, FaSeedling, FaTruck, FaPhone, FaEnvelope } from 'react-icons/fa';
    import './App.css';
    import heroImage from '/premium-farm-image.jpg';
    import aboutImage from '/about-farm-image.jpg';

    function App() {
      return (
        <div className="app-container">
          <header className="header">
            <div className="logo">Farm Feed</div>
            <nav className="nav">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <section className="hero">
            <div className="hero-content">
              <h1>Elevating Agriculture Through Premium Trade</h1>
              <p>Connecting discerning farmers and buyers with the finest feed and grain products.</p>
              <button className="cta-button">Explore Our Platform</button>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="Farm Feed" />
            </div>
          </section>

          <section id="about" className="about">
            <div className="about-image">
              <img src={aboutImage} alt="About Farm Feed" />
            </div>
            <div className="about-content">
              <h2>Our Commitment to Excellence</h2>
              <p>
                Farm Feed is a premier marketplace dedicated to the highest standards of feed and grain trading in South Africa. We provide a sophisticated platform for farmers and buyers who demand quality, reliability, and exceptional service.
              </p>
              <div className="about-icons">
                <div><FaTractor size={40} /> <p>For Elite Farmers</p></div>
                <div><FaSeedling size={40} /> <p>Premium Quality</p></div>
                <div><FaTruck size={40} /> <p>Exceptional Delivery</p></div>
              </div>
            </div>
          </section>

          <section id="services" className="services">
            <h2>Exclusive Services</h2>
            <div className="service-cards">
              <div className="service-card">
                <h3>Curated Selection</h3>
                <p>Access a meticulously curated selection of premium feed and grain products.</p>
              </div>
              <div className="service-card">
                <h3>Direct Trade</h3>
                <p>Engage in direct trade with trusted producers and buyers.</p>
              </div>
              <div className="service-card">
                <h3>Secure and Transparent</h3>
                <p>Experience secure and transparent transactions with our advanced platform.</p>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <h2>Connect With Us</h2>
            <div className="contact-info">
              <p><FaPhone /> +27 12 345 6789</p>
              <p><FaEnvelope /> info@farmfeed.co.za</p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </section>

          <footer className="footer">
            <p>&copy; 2023 Farm Feed. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;
