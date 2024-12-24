import './styles/globals.scss';
import React from 'react';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Breadcrumb />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;
