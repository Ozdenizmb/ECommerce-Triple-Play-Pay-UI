'use client';
import React, { useEffect } from 'react';

const TppCreditCard = () => {

    useEffect(() => {
        var triple = new Triple(process.env.REACT_APP_TPP_PUBLIC_API_KEY);

        triple.generatePaymentForm({
            containerSelector: '#example',
            amount: 10.00,
            //Handle error response
            onError: (errorData) => {
                console.log('Error');
                console.log(errorData);
            },
            // Handle success response
            onSuccess: (data) => {
                console.log('Success');
                console.log(data);
            },
        });
    }, []);

    return (
        <div>
            <div id="example"></div>
        </div>
    );
};

export default TppCreditCard;