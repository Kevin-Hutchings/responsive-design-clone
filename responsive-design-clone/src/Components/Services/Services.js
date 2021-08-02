import React from 'react';
import Products from './Products/Products';
import './Services.css';

export default function Services() {
   return (
      <section className='services'>
         <h1 className='services-title'> SERVICES </h1>
         <span class='services-text'> Lorem ipsum dolor sit amet consectetur. </span>
         <Products />
      </section>
   )
}