import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const featuredImages = [
  'bccc4852-5787-4281-81f9-aa9d8941e838.jpg',
  '946c3c23-3cee-4a27-add3-54d02fce7172.jpg',
  'b94326db-7487-42da-8bea-1c5970e2e186.jpg',
  'cc4cc480-4a7a-40d6-8f98-f8b8a44cf135.jpg',
  'd82896fa-be24-4ecc-b43c-5dda0442c268.jpg',
  'e866892a-08ff-4713-a3c1-eebecef4669d.jpg'
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              Love at First Sight.<br />
              Meet <span className="gradient-text">Design Diva</span>
            </h1>
            <p className="hero-subtitle">
              Exquisite, premium female fashion designed to steal hearts. 
              Proudly based in Bhopal, delivering our elegant creations Pan India.
            </p>
            <div className="hero-actions">
              <Link to="/professional" className="btn-primary">
                Explore Collection <ArrowRight size={20} />
              </Link>
              <div className="hero-badge">
                 <Heart size={18} color="var(--accent)" /> Pure Elegance
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <img src="/assets/100aa77c-065a-4de4-9e1f-7059e7bef36a.jpg" alt="Design Diva Elegance" className="hero-img" />
            <div className="img-decoration"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="gallery-section">
        <div className="section-header">
           <h2 className="gradient-text">Featured Masterpieces</h2>
           <p>Curated and designed with boundless passion</p>
        </div>
        <div className="masonry-grid">
          {featuredImages.map((img, idx) => (
             <motion.div 
               key={idx} 
               className="gallery-item glass-card"
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
             >
               <img src={`/assets/${img}`} alt={`Design Diva ${idx + 1}`} loading="lazy" />
               <div className="item-overlay">
                  <span>View Details</span>
               </div>
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
