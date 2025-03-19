'use client';
import CreditCardForm from '@/components/CreditCardForm'
import CreditCardInfo from '@/components/CreditCardInfo';
import NoFoundData from '@/components/NoFoundData';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const CreditCard = () => {

    const [creditCard, setCreditCard] = useState([]);

    useEffect(() => {
        updateCreditCardData()
    }, []);

    const updateCreditCardData = () => {
        const existingCreditCard = JSON.parse(sessionStorage.getItem('credit-card')) || [];
        console.log(existingCreditCard);
        setCreditCard(existingCreditCard);
    }

    const onClickAddCreditCard = (token, numberLastFourDigit, expiry, name) => {
        const existingCreditCard = JSON.parse(sessionStorage.getItem('credit-card')) || [];
        const card = {token, numberLastFourDigit, expiry, name};
        existingCreditCard.push(card);
        sessionStorage.setItem('credit-card', JSON.stringify(existingCreditCard));
        updateCreditCardData()
        toast.success("Your credit card has been saved successfully.");
    }

    const onClickDeleteCreditCard = (token) => {
        const existingCreditCard = JSON.parse(sessionStorage.getItem('credit-card')) || [];
        const updatedCart = existingCreditCard.filter((item) => item.token !== token);
        sessionStorage.setItem('credit-card', JSON.stringify(updatedCart));
        updateCreditCardData()
    }

    return (
        <div className="container mb-5">
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-12 col-md-6">
                    <CreditCardForm onAdd={onClickAddCreditCard} />
                </div>
            </div>
            <div>
                {creditCard.length !== 0 ?
                    <div className='d-flex mt-5'>
                        {creditCard.map((card) => (
                            <div key={card.token} className='me-4'>
                                <CreditCardInfo creditCard={card} onRemove={onClickDeleteCreditCard} />
                            </div>
                        ))}
                    </div>
                    
                    :
                    <div className='mt-5'>
                        <NoFoundData errorMessage={"No saved credit card information found."} />
                    </div>
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreditCard