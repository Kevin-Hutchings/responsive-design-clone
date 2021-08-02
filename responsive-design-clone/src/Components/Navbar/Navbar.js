import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
   constructor(props){
      super(props);

      this.state = {};

      this.handleScroll = this.handleScroll.bind(this);
   }

   componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
   }

   componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
   }

   handleScroll() {
      if (window.scrollY > 40) {
         document.querySelector(".navbar").className = "navbar scroll";
      } else {
         document.querySelector(".navbar").className = "navbar";
      }
   };

   render(){
      return(
         <nav className='navbar'>
            <img className='nav-img' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='start bootstrap logo' />
            <ul className="nav-list">
               {this.props.links.map((el) => {
                  return <li> {el} </li>
               })}
            </ul>
            <button className="nav-button"> MENU </button>
         </nav>
      )
   }
}