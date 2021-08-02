import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
   constructor(props){
      super(props);

      this.state = {
         isMenuOpen: false,
      };

      this.handleScroll = this.handleScroll.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
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

   toggleMenu() {
      const {isMenuOpen} = this.state;
      this.setState({ isMenuOpen: !isMenuOpen })
   }

   render(){
      const {links} = this.props;
      const {isMenuOpen} = this.state;
      const menuClass = isMenuOpen ? 'menu-open' : '';
      return(
         <div>
            <nav className='navbar'>
               <img className='nav-img' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='start bootstrap logo' />
               <ul className="nav-list">
                  {links.map((el) => {
                     return <li> {el} </li>
                  })}
               </ul>
               <button className="nav-button" onClick={this.toggleMenu}> MENU </button>
            </nav>
            <menu className={menuClass}>
               <ul className={isMenuOpen ? 'menu-text': 'hidden'}>
                  {links.map((el) => {
                     return <li> {el} </li>
                  })}
               </ul>
            </menu>
         </div>
      )
   }
}