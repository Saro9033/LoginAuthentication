import React, { useContext } from 'react'
import Navbar from './Navbar'
import { DataContext } from '../Context.js/DataContext'

const Home = () => {
const {openModal} = useContext(DataContext)
  return (
    <div>
      <div className='bg-img'>  
      <Navbar/>
      <div style={{width:'100%', height:'100vh'}} className=' d-flex align-items-center text-center justify-content-center flex-column text-light'>
        <h1 className='px-5' style={window.innerWidth < 590 ? {fontSize:'40px'}:{fontSize:'60px'}}>Enjoy big movies, hit series and more from ₹ 149. </h1>
       <p style={window.innerWidth < 590 ? {fontSize:'16px'}:{fontSize:'23px'}}> 
        <span>Join today. Cancel anytime.</span> <br />
        <span>Ready to watch? Enter your email to create or restart your membership.</span></p> 
        <button  className='btn btn-danger' onClick={openModal}>Get Started</button>
      </div>
      </div>
    </div>

  )
}

export default Home

