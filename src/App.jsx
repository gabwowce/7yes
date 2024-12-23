
import './styles/globals.scss';
import React from 'react';
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

function App() {

  return (
    <>
     <Navbar/>
     <Breadcrumb/>
     <Checkout/>
     <Footer/>
    </>
   

  );
}

export default App;
