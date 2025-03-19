'use client';
import CartCard from '@/components/CartCard';
import React, { useEffect, useState } from 'react'
import data from '../../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard  } from '@fortawesome/free-solid-svg-icons';
import NoFoundData from '@/components/NoFoundData';
import { ToastContainer, toast } from 'react-toastify';
import { chargePayment } from '@/api/apiCalls';

const Cart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [creditCard, setCreditCard] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        updateCart();
        getCreditCardsInfo();
    }, []);

    const updateCart = () => {
        const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        let total = 0;
        const tempCartProduct = [];
        
        for(let i = 0; i < existingCart.length; i++) {
            const product = data.products.find((product) => product.id === existingCart[i]);
            if (product && product.price) {
                tempCartProduct.push(product);
                const priceWithoutSymbol = product.price.replace(/[£$]/g, '');
                const priceNumber = parseFloat(priceWithoutSymbol);
                total = total + priceNumber;
            }
        }
        setCartProduct(tempCartProduct);
        setTotalAmount(total);
    }

    const getCreditCardsInfo = () => {
        const existingCreditCard = JSON.parse(sessionStorage.getItem('credit-card')) || [];
        setCreditCard(existingCreditCard);
        console.log(creditCard);
    }

    const onClickBuy = async () => {
        try {
            if(selectedCard === null || selectedCard === "") {
                toast.error("Please select the credit card you will use for payment..");
                return;
            }
            const body = {
                token: selectedCard,
                amount: totalAmount
            }
            await chargePayment(body);

            const order = {cartProduct, selectedCard, totalAmount}
            const existingOrder = JSON.parse(sessionStorage.getItem('order')) || [];
            existingOrder.push(order);
            sessionStorage.setItem('order', JSON.stringify(existingOrder));
            sessionStorage.setItem('cart', JSON.stringify([]));
            updateCart();

            toast.success("Payment was successfully received.");
        } catch(error) {
            toast.error("An unexpected error occurred while processing the payment.");
        }
    }

    const handleRemoveProduct = (id) => {
        const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const updatedCart = existingCart.filter((item) => item !== id);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));

        updateCart();
    }

    return (
        <div className='container mt-5'>
            <h3>Your Cart ({cartProduct.length})</h3>
            <div className='row'>
                <div className='col-lg-8 col-md-12 mb-5'>
                    {cartProduct.length !== 0 ?
                        cartProduct.map((product) => (
                            <div key={product.id}>
                                <CartCard product={product} onRemove={handleRemoveProduct} />
                            </div>
                        ))
                        :
                        (
                            <NoFoundData errorMessage={"Cart Empty"}/>
                        )
                    }
                    
                </div>
                <div className='col-lg-4 col-md-12 mb-5'>
                    <div className='card shadow'>
                        <div className='container'>
                            <p className='h2 mt-2 mb-2'>Total Amount</p>
                            {cartProduct.map((product) => (
                                <div className='row align-items-center' key={product.id}>
                                    <div className='col-lg-9 col-md-12 mt-2 mb-2'>{product.title}</div>
                                    <div className='col-lg-3 col-md-12 h6 mt-2 mb-2'>{product.price}</div>
                                    <hr/>
                                </div>
                            ))}
                            <div className='row align-items-center'>
                                <div className='col-lg-9 col-md-12 h6 mt-2 mb-2'>Total</div>
                                <div className='col-lg-3 col-md-12 h6 mt-2 mb-2'>£{totalAmount}</div>
                            </div>
                            <div>
                                {creditCard.length !== 0 ?
                                    creditCard.map((card) => (
                                        <div key={card.token} className='mb-3'>
                                        <label className='d-flex align-items-center'>
                                            <input
                                                type="radio"
                                                name="creditCard"
                                                value={card.token}
                                                checked={selectedCard === card.token}
                                                onChange={() => setSelectedCard(card.token)}
                                                className='me-2'
                                            />
                                            <div className='d-flex mt-2'>
                                                <FontAwesomeIcon icon={faCreditCard} className="me-2 mt-1" />
                                                <p className='me-3'>{card.name}</p>
                                                <p>**** **** **** {card.numberLastFourDigit}</p>
                                            </div>
                                        </label>
                                    </div>
                                    ))
                                    :
                                    <div className='mt-5'>
                                        <NoFoundData errorMessage={"No saved credit card information found."} />
                                    </div>
                                }
                            </div>
                            <div className='row mt-3'>
                                <button className="btn btn-warning me-2" onClick={onClickBuy}>
                                    <FontAwesomeIcon icon={faShoppingCart} className="icon me-1" />
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Cart