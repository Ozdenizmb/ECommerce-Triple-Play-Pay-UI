'use client';
import CartCard from '@/components/CartCard';
import React, { useEffect, useState } from 'react'
import data from '../../../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import NoFoundData from '@/components/NoFoundData';

const Cart = () => {
    const [cartProduct, setCartProduct] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        updateCart();
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

    const onClickBuy = () => {

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
        </div>
    )
}

export default Cart