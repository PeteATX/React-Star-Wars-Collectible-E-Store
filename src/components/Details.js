import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                const {id, company, img, info, price, title, inCart} =  
                 value.detailProduct;
                 return (
                    <div className="container py-5">
                     {/* title */}
                     <div className="row">
                        <div className="text-bright col-10 mx-auto text-center my-5">
                        <h1>{title}</h1>
                     </div>
                   </div>
                     {/* end title */}
                     {/* product info */}
                    <div className="row">
                     <div className="col-10 mx-auto col-md-6 my-4 ">
                        <img src={img} style={{width: '20rem',height:"20rem"}}className="img-fuid" alt="product" />
                       
                    </div>
                    {/* product text */}
                    <div className="text-bright col-10 mx-auto col-md-6 my-2 ">
                    <h2> {title}</h2>
                    <h4 className="text-bright mt-3 mb-3">
                    <strong>
                        Price : {price} <span>   Imperial Credits</span> 
                    </strong>
                    </h4>
                    <p className="text-capitalize text-wrap font-weight-bold mt-3 mb-0">
                    About your favorite Star Wars Character:
                    </p>
                    <p className="text-bright">{info}</p> 
                    {/* buttons */}
                    <div>
                    <Link to='/'>
                    <ButtonContainer>
                      back to products
                    </ButtonContainer>
                    </Link>
                    <ButtonContainer cart
                      disabled={inCart?true:false}
                      onClick={()=> {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      >
                      {inCart? "inCart" : "add to cart"}
                    </ButtonContainer>
                    </div>
                    </div>
                  </div>
                </div>
                
               );
             }}
            </ProductConsumer>
        );
    }
}

