import React from 'react';
import Navbar from './Navbar';
import NavbarSession from './NavbarSession';
import './core-ui-css/index.css';
import Layout from './Layout';
import Footer from './Footer';
import Category from './category';


function App() {

  return (
    <div className="App bg-black text-white min-h-screen">
      <NavbarSession /> 
      <Layout />
      <Footer />
    </div>
  )
}

export default App
  