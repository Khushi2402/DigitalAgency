import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
import Feature from './components/Feature';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/feature" element={<Feature />} />
          {/* 
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
