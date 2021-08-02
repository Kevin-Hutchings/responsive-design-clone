import React from 'react';

export default function Products() {
   return (
      <div className="products-container">
         <div className="products">
            <img src='https://via.placeholder.com/150' alt="placeholder" />
            <h1> E-Commerce </h1>
            <h3 className='products-text'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </h3>
         </div>
         <div className="products">
            <img src='https://via.placeholder.com/150' alt="placeholder" />
            <h1> Responsive Design </h1>
            <h3 className='products-text'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </h3>
         </div>
         <div className="products">
            <img src='https://via.placeholder.com/150' alt="placeholder" />
            <h1> Web Security </h1>
            <h3 className='products-text'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. </h3>
         </div>
      </div>
   )
}