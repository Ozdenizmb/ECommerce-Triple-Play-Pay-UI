'use client';
import React, { useEffect, useState } from 'react';

const TppCreditCard = () => {

    const[token, setToken] = useState(null);
    let triple;

    useEffect(() => {
        triple = new Triple(process.env.NEXT_PUBLIC_TPP_PUBLIC_API_KEY);
        triple.generatePaymentForm({
            containerSelector: '#example',
            paymentType: "charge",
            description: "\"\"",
            paymentOptions: ['credit_card'],
            saveMode: true,
            savePaymentToken: true,
            showEmail: false,
            zipMode: "required",
            fullName: false,
            billingAddress: false,
            optIn: false,
            emailOption: false,
            phoneOption: false,
            showDescription: false,
            hideSubmitButton: true,
            isMin: true,
            iframeMinHeightPx: 210,
            isMobileResponsive: true,
            hidePaymentDetailsLabel: true,

            //googlePayEnvironment: 'TEST', // set this to test to evaluate Google Pay functionality locally
            //googlePayMerchantId: '12345678901234567890',
            
            //Handle error response
            onError: (errorData) => {
                console.log('Error');
                console.log(errorData);
            },
            // Handle success response
            onSuccess: (data) => {
                setToken(data.payload.token)
                console.log('Success');
                console.log("TOKEN: " + data.payload.token);
            },
        });
    }, []);

    const onClickSaveCard = () => {
        triple.tokenize();
    }

    return (
        <div>
            <div id="example"></div>
            <button className='btn btn-primary mt-5 text-center' onClick={onClickSaveCard}>SAVE CARD</button>
            <div className='mb-5'>U Can Call Token Right Now. We Will Development This Project</div>
            {
                token !== null && <div className='mb-5'>Token: {token}</div>
            }
        </div>
    );
};

export default TppCreditCard;