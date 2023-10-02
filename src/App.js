import React from 'react';
import Home from './Components/home';
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AddItems from './Components/AddItems';

import { DataProvider } from './Context.js/DataContext';

function App() {
  return (
    <div>

      <Navbar />
      <DataProvider>
        <Home />
        <AddItems />
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;

