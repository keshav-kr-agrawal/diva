import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}>
      <div className="nav-container">
        <NavLink to="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <img src="/public/assets/logo.jpg" alt="Design Diva" className="logo-img" />
          <span className="gradient-text">Design Diva</span>
        </NavLink>

        <div className="desktop-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/story" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Our Story</NavLink>
          <NavLink to="/professional" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Professional</NavLink>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <NavLink to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Home</NavLink>
        <NavLink to="/story" className="mobile-link" onClick={() => setMobileOpen(false)}>Our Story</NavLink>
        <NavLink to="/professional" className="mobile-link" onClick={() => setMobileOpen(false)}>Professional</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
