import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

export default function Header({ links }) {
   return(
      <header className="header">
         <Navbar links={links} />
         <section className="welcome-text">
            <h3> Welcome To Our Studio! </h3>
            <h1> IT'S NICE TO MEET YOU </h1>
            <button> TELL ME MORE </button>
         </section>
      </header>
   )
}