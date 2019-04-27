import React from 'react';
import PayPal from './PayPal';

export default function CartTotals({value, history}) {
    const{cartSubTotal,cartTax,cartTotal,clearCart} = value;
    
   return  (

    <React.Fragment>

        <div className="container text-bright">
       <div className="row">
      <div className="col-5 mt-2 mr-sm-5 ml-md-auto col-sm-8 text-right">
      
        <button className="btn-outline-danger text-uppercase mb-3 px-5" type="button"
       onClick={() => clearCart()} >
        clear cart
    </button>

       
    <h5>
        <span className="text-title">
        subtotal: 
        </span>
        <strong>  {cartSubTotal} </strong>
    </h5>

    
    <h5>
        <span className="text-title">
        imperial tax:    </span>
        <strong> {cartTax} </strong>
    </h5>

    <h5>
        <span className="text-title">
        total:    </span>
        <strong> {cartTotal}   Imperial Credits</strong>
    </h5>
     <PayPal total={cartTotal} clearCart= {clearCart} history={history} />

    

    
  
    </div>
  </div>  
</div>
</React.Fragment>

   
)
}


