import React from 'react'
import "../assets/Styles/Style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar p-4  navbar-expand-lg d-flex justify-content-between ">
        <div className='nav-branding'>
            <Link to={"/"}>
            <h3 className='fw-bold'>#VANLIFE</h3>
            </Link>
        </div>
        <ul className='nav-links'>
            <Link to={"/About"}>
            <li>
                <a href='#'>About</a>
            </li>
            </Link>
            <Link to={"/Vans"}>
            <li>
                <a href='#'>Vans</a>
            </li>
            </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar