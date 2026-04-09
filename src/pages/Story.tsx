import { motion } from 'framer-motion';
import './Story.css';

const Story = () => {
  return (
    <div className="story-container">
      <section className="story-hero">
        <motion.div 
          className="story-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gradient-text">Our Story</h1>
          <p>The journey of Design Diva.</p>
        </motion.div>
      </section>

      <section className="story-content-section">
        <div className="story-grid">
          <motion.div 
            className="story-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Born in <span className="gradient-text">Bhopal</span></h2>
            <p>
              Design Diva started with a simple vision: to bring exquisite, premium design to every corner of the country. As a proudly female-led business founded in the heart of Bhopal, we blend traditional elegance with modern sophistication.
            </p>
            <p>
              Every piece in our collection is curated with meticulous attention to detail, ensuring that our clients receive nothing but the absolute best. We believe in empowering women through art, fashion, and unparalleled design.
            </p>
            <div className="story-stats">
              <div className="stat-box glass-card">
                <h3>Female</h3>
                <span>Led Business</span>
              </div>
              <div className="stat-box glass-card">
                <h3>Pan India</h3>
                <span>Delivery</span>
              </div>
              <div className="stat-box glass-card">
                <h3>100%</h3>
                <span>Premium Quality</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="story-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/ab963809-0503-4112-a887-f0bc09c5883b.jpg" alt="Design Diva Studio" className="story-image" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Story;
