import React from 'react';
import './Header.css'

export default function Header() {
   return(
      <header>
         <h1> Start Bootstrap </h1>
         <ul className="header-list">
            {links.map((el) => {
               return <li> {el} </li>
            })};
         </ul>
      </header>
   )
}