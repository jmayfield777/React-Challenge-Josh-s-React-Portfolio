import React from 'react';


import styles from './App.module.css';

import PortfolioContainer from './components/PortfolioContainer';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { useState } from 'react';

function App() {
  const [ currentPage, setCurrentPage ] = useState('About');

  return (
    <div className={styles.App}>
      <Navbar />
      <PortfolioContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default App;