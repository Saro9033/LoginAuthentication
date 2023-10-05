import React from 'react';
import { DataProvider } from './Context.js/DataContext';
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/home';
import { ToastContainer } from 'react-toastify'
import Login from './Components/Login';
import Register from './Components/Register';
import User from './Components/User';

function App() {
  return (
    <div className='App'>
      <DataProvider>
        <ToastContainer theme='colored'></ToastContainer>
        <Login />
        <Register />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </DataProvider>

    </div>
  );
}

export default App;

