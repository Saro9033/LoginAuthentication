import React, { useContext } from "react";
import Net from '../netflix.png'
import { DataContext } from "../Context.js/DataContext";

const Navbar = (bg) => {
    const {openModal} = useContext(DataContext)

    
    return (
        <nav id='navbar' className="navbar px-1 navbar-dark" style={ { background: 'transparent', color: 'white', position: 'sticky', top: '0', zIndex:'1' }}   >
            <div className="container-fluid">
                <a href='/' className="navbar-brand text-dark" >
                    <img src={Net} alt="Logo" width={window.innerWidth < 590 ? '80px': '130px'}/>
                </a>

                <div className="justify-content-end " >
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <button className="nav-link px-3 py-2 text-light bg-danger rounded-2 mx-1" onClick={openModal} >Signup </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;