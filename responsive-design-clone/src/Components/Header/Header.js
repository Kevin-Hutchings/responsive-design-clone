import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

export default function Header({ links }) {
   return(
      <header className="header">
         <Navbar 
            links={links}
         />
         <span className="welcome-text">
            <h3> Welcome To Our Studio! </h3>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button className="header-button"> TELL ME MORE </button>
         </span>
      </header>
   )
}