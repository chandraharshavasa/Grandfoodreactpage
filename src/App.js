import React from 'react';
import Navbar from './components/Navbar/Navbar';   // Correct path to Navbar
import HeroSection from './components/Herosection/HeroSection';  // Correct path to HeroSection
import Footer from './components/Footer/Footer';   // Correct path to Footer
import './App.css';   // Correct path to App.css

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
