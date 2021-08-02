import React from 'react';
import data from './data';

export default function Products() {
   const mappedProducts = data.map((data) => {
      return(
         <div className="products">
            <img src={data.img} alt="placeholder" />
            <h1> {data.title} </h1>
            <h3 className='products-text'> {data.description} </h3>
         </div>
      )
   });

   return (
      <div className="products-container">
         {mappedProducts}
      </div>
   )
}