import React from 'react';
import Home from './Components/home';
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='bg-dark text-light'>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}



export default App;
