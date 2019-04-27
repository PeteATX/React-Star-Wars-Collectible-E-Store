import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            
            		console.log("The payment was succeeded!", payment);
                 this.props.clearCart();
                 this.props.history.push('/');
        }
 
        const onCancel = (data) => {
          console.log('The payment was cancelled!', data);
           
        }
 
        const onError = (err) => {
            
            console.log("Error!", err);
           
        }
 
        let env = 'sandbox'; 
        let currency = 'USD'; 
        let total = 1; 

        const client = {
            sandbox: 'AUUEM4m6k3Vjl9uBEDN94tLvpqgw3s8g2E5lGrxO3xd4IoBt5bWcALn4eHYr5jsBzKU3UQwnOKNj9JM-',
            production: 'YOUR-PRODUCTION-APP-ID'
        };
        
        return (
            <PaypalExpressBtn env={env}
             client={client} 
             currency={currency} 
             total={this.props.total} 
             onError={onError} 
             onSuccess={onSuccess} 
             onCancel={onCancel} />
        );
    }
}