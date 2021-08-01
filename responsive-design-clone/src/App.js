import React, { Component } from 'react';
import Header from './Components/Header';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      headerLinks: ['SERVICES', 'PORTFOLIO', 'ABOUT', 'ITEM', 'CONTACT']
    };
  }

  render(){
    const {headerLinks} = this.state;
    
    return (
      <div className="App">
        <Header links={headerLinks} />
      </div>
    )
  }
}