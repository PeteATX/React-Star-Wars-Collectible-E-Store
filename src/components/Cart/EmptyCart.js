import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default function EmptyCart() {
   return (

    <div className="container mt-5">
    <div className="row">

    <div class="col-10 text-bright mx-auto text-center text-title">
    <h1> your cart is currently empty Young Jedi</h1>
    
    <Link to = "/">
    <button className= "btn-default btn-white font weight 400 my-3 justify-contents-center mx-1 " type="button">
    Return to Products
    </button>
    </Link>
    </div>
    </div>
    
    </div>
    
    
    

   )
}