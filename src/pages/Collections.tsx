import { motion } from 'framer-motion';
import './Collections.css';

const collectionImages = [
  '100aa77c-065a-4de4-9e1f-7059e7bef36a.jpg',
  '946c3c23-3cee-4a27-add3-54d02fce7172.jpg',
  '9d4a23a4-d7f5-4192-a19a-58c5c3fa8fbf.jpg',
  '9d7fac4c-b1b8-4627-8959-0f51220b11e5.jpg',
  '9f605469-ae7e-4ec1-969a-d647bc2c16fb.jpg',
  'a093af1c-481f-4651-8f96-663d2e97ac5e.jpg',
  'ab963809-0503-4112-a887-f0bc09c5883b.jpg',
  'b94326db-7487-42da-8bea-1c5970e2e186.jpg',
  'bccc4852-5787-4281-81f9-aa9d8941e838.jpg',
  'cc4cc480-4a7a-40d6-8f98-f8b8a44cf135.jpg',
  'd82896fa-be24-4ecc-b43c-5dda0442c268.jpg',
  'db191ae1-a247-4b4c-919d-91be6f8975c7.jpg',
  'db6de356-56e2-4f6e-a920-d84b786a6681.jpg',
  'dfbb051a-5a84-4477-8032-e5cf116cc30d.jpg',
  'e866892a-08ff-4713-a3c1-eebecef4669d.jpg',
  'ef027b8d-d4e4-463f-a777-4ffd35f2c2dc.jpg',
  'ef071ef2-2567-46f0-bd81-f66a9c17deba.jpg',
  'f5678c13-d32b-4c09-971d-80bac4c97d59.jpg',
  'fcc41f8a-b098-4340-abbd-e697a5a0f0d3.jpg'
];

const Collections = () => {
  return (
    <div className="collection-container">
      <section className="collection-hero">
        <motion.div 
          className="collection-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gradient-text">Our Collections</h1>
          <p>Explore the complete gallery of pure elegance</p>
        </motion.div>
      </section>

      <section className="collection-gallery">
        <div className="collection-masonry">
           {collectionImages.map((img, idx) => (
             <motion.div 
               key={idx} 
               className="collection-item glass-card"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
             >
               <img src={`/assets/${img}`} alt={`Collection Piece ${idx + 1}`} loading="lazy" />
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
