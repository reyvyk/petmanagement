import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div>
        <h1>Content</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
