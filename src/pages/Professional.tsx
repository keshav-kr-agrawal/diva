import { motion } from 'framer-motion';
import './Professional.css';

const professionalImages = [
  'db191ae1-a247-4b4c-919d-91be6f8975c7.jpg',
  'ef071ef2-2567-46f0-bd81-f66a9c17deba.jpg',
  '9d7fac4c-b1b8-4627-8959-0f51220b11e5.jpg',
  'db6de356-56e2-4f6e-a920-d84b786a6681.jpg',
  'f5678c13-d32b-4c09-971d-80bac4c97d59.jpg',
  'a093af1c-481f-4651-8f96-663d2e97ac5e.jpg'
];

const Professional = () => {
  return (
    <div className="pro-container">
      <section className="pro-hero">
        <motion.div 
          className="pro-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gradient-text">Professional Standards</h1>
          <p>Uncompromising quality and seamless service from Bhopal to anywhere in India.</p>
        </motion.div>
      </section>

      <section className="pro-details">
        <div className="pro-grid">
           {professionalImages.map((img, idx) => (
             <motion.div 
               key={idx} 
               className="pro-card glass-card"
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: (idx % 3) * 0.15, duration: 0.6 }}
             >
               <div className="pro-img-wrapper">
                 <img src={`/assets/${img}`} alt={`Professional Service ${idx + 1}`} loading="lazy" />
               </div>
               <div className="pro-card-content">
                  <h3>Exquisite Selection</h3>
                  <p>Experience the finest crafted designs handpicked for unparalleled aesthetics. Delivered safely with our Pan India logistics.</p>
               </div>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Professional;
