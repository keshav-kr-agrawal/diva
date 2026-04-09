import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="gradient-text">Design Diva</h3>
            <p className="brand-subtitle">Premium Female-Led Business</p>
            <p className="location-text">📍 Based in Bhopal</p>
          </div>
          
          <div className="footer-conditions">
            <h4>Our Policy</h4>
            <ul>
              <li>Pan India Delivery</li>
              <li>No Cash on Delivery (COD)</li>
              <li>No Returns / Final Sale</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://instagram.com/designdiva.1" target="_blank" rel="noreferrer" className="social-btn">
                <span>IG: @designdiva.1</span>
              </a>
              <a href="https://wa.me/919202308942" target="_blank" rel="noreferrer" className="social-btn">
                <span>WA: +91 9202308942</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Watermark Section */}
      <div className="watermark-container">
         <h1 className="watermark-text">diva</h1>
      </div>
    </footer>
  );
};

export default Footer;
