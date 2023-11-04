import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Intro from './Components/Intro/Intro';
import Detailscard from './Components/Detailscard/Detailscard';
import Slideshow from './Components/Slideshow/Slideshow';
import { useEffect } from 'react';
import Views from './Components/Views/Views';
import Footer from './Components/Footer/Footer';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      
      <Hero/>
      <Intro/>
      <Detailscard/>
      <Slideshow/>
      <Views/>
      <Footer/>
      {/* <h1>Landing Page</h1> */}
    </div>
  );
}

export default App;
