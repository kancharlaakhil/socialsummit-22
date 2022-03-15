import React from 'react';

import PaymentHeader from './PaymentHeader';

import './css/index.css'

const Payment = () => {


    return (
        <div className='payment-container p-0 m-0 h-100'>
            <div className='row payment-header'>
                <PaymentHeader/>
            </div>
            <div className='row payment-component'>
            <div className="payment-button">
                <a href="https://secure-ptg.payphi.com/pg/portal/pay/initiatePayOrder?merchantID=P_30861" target="_blank" rel="noreferrer">Initiate Payment </a>
            </div>
                
            </div>

        </div>
    );
}

export default Payment;