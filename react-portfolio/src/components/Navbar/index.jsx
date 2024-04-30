import React from 'react';

export const Navbar = () => {
  return <nav>
    <a href="/">Josh's Portfolio</a>
    <div>
      <ul>
        <li><a href="#About">About</a></li>
      </ul>
      <ul>
        <li><a href="#Projects">Projects</a></li>
      </ul>
      <ul>
        <li><a href="#Resume">Resume</a></li>
      </ul>
      <ul>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </div>
  </nav>;
};