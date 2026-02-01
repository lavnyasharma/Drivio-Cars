import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarDetailPage from './pages/CarDetailPage';
import BuyCarPage from './pages/BuyCarPage';
import { AboutPage, BlogPage, ContactPage } from './pages/OtherPages';
import ComingSoonPage from './pages/ComingSoonPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Coming Soon Landing Page - No Header/Footer */}
        <Route path="/" element={<ComingSoonPage />} />
        
        {/* Regular Pages with Header/Footer */}
        <Route path="/*" element={
          <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/car/:id" element={<CarDetailPage />} />
                <Route path="/buy-car" element={<BuyCarPage />} />
                <Route path="/car-listing" element={<BuyCarPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
