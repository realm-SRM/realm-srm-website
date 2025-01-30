import React from 'react'
import { useState, useEffect } from 'react';
import loadCashfree from "./cashfreeService";
import {load} from "@cashfreepayments/cashfree-js" ;
let cashfree;
        var initializeSDK = async function () {    
            console.log(cashfree+"1")      
            cashfree = await load({
                mode: "production"
            });
        }
        console.log(cashfree)
        initializeSDK();
const submitPayment = async () => {
    
    const payload = { 'name': 'Aakarsh Kumar', 'email': 'aakarsh2504@gmail.com' }; // Replace with your data

    try { 
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/joinus/create_order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        });
  
        const data = await response.json();
        
        
        console.log(data.payment_session_id)
        let checkoutOptions = {
            paymentSessionId: data.payment_session_id,
            redirectTarget: "_self",
        };
        cashfree.checkout(checkoutOptions);
        
        
      } catch (error) {
        console.log('Error submitting form: ' + error.message);
  };

}

const JoinUs = () => {
  const [cashfree, setCashfree] = useState(null);

    useEffect(() => {
        loadCashfree((Cashfree) => {
            const cfInstance = Cashfree({ mode: "production" });
            setCashfree(cfInstance);
        });
    }, []);

    return (
        <div style={{ textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>Cashfree Integration in React</h1>
            {cashfree ? <p>Cashfree Loaded Successfully!</p> : <p>Loading Cashfree...</p>}
            <input type="button" value="Pay Now" onClick={submitPayment} />
        </div>
    );
}

export default JoinUs;
