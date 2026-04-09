import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Story from './pages/Story';
import Professional from './pages/Professional';
import Collections from './pages/Collections';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/story" element={<Story />} />
          <Route path="/professional" element={<Professional />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
