import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import FormAuthorization from './components/FormAuthorization';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div>
          <FormAuthorization btnText='Gerar Termo'/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
