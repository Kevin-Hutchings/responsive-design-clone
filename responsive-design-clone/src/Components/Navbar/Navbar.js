import React from 'react';
import './Navbar.css'

export default function Navbar({ links }) {
   return(
      <nav>
         <h1> Start Bootstrap </h1>
         <ul className="nav-list">
            {links.map((el) => {
               return <li> {el} </li>
            })}
         </ul>
      </nav>
   )
}