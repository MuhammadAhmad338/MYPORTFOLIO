import './LayOut.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      <div >
     
        <main className='main-content'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default LayOut