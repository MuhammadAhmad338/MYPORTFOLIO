import './LayOut.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main className='main-content'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default LayOut