import Link from 'next/link';
import React, {useState} from 'react';

export default function Navbar({setSecret , setUsername,logout, setLogout, username, secret}) {
  
  const onClick = () => {
    setSecret("")
    setUsername("")
    setLogout(false)
  }
  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">Chattopia</a>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="https://www.linkedin.com/in/ayush-verma-37622320b/">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
        {logout && <li className="nav-item">
          <Link href="/">
            <a onClick={onClick} className="nav-link">Logout</a>
          </Link>
        </li>}
      </ul>
    </nav>
  );
}
