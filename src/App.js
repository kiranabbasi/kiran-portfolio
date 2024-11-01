import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Hero from './Pages/Hero.jsx';
import About from './Pages/About.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero id="hero"/>
      <About id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </div>
  )
}

export default App

