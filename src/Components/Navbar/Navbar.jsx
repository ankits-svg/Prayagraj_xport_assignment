import React, { useEffect, useLayoutEffect, useRef } from 'react';
// import {TweenMax, Power3} from 'gsap';

import './Navbar.css';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      // gsap.from(".name", { y:40, duration:1, opacity:0 });
      // // or refs
      // gsap.from(".shop", { y:40, duration:1, opacity:0 });
      const tl = gsap.timeline();

    tl.fromTo(navRef, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.inOut' })
      .from('.name', { x: -50, opacity: 0, duration: 0.5 }, '-=0.5')
      .from('.shop', { x: -50, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.blog', { x: -50, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.contact', { x: -50, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.search-input', { x: -50, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.signup-button', { x: -50, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.profile-image', { x: -50, opacity: 0, duration: 0.5 }, '-=0.3');

     
    }, navRef);
    
    return () => {
      ctx.revert()
    
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="container">
        <div className="company-name">
          <h1 className='name' href="/">Prayagraj Xport</h1>
        </div>
        <ul className="nav-links">
          <li className='Box shop'><a href="/">Shop</a></li>
          <li className='Box blog'><a href="/blog">Blog</a></li>
          <li className='Box contact'><a href="/contact">Contact</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <button className="signup-button">Sign Up</button>
        <div className="profile-image">
          <img src="https://bit.ly/dan-abramov" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
