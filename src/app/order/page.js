'use client';
import React, { useEffect, useState } from 'react'
import '../../style/Order.css';
import { refundPayment } from '@/api/apiCalls';
import { ToastContainer, toast } from 'react-toastify';
import NoFoundData from '@/components/NoFoundData';

const Order = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        updateOrder()
    }, []);

    const updateOrder = () => {
        const existingOrder = JSON.parse(sessionStorage.getItem('order')) || [];
        setOrder(existingOrder)
    }

    const onclickRefund = async (transactionId) => {
        try {
            await refundPayment(transactionId);
            const existingOrder = JSON.parse(sessionStorage.getItem('order')) || [];
            const updatedCart = existingOrder.filter((item) => item.transactionId !== transactionId);
            sessionStorage.setItem('order', JSON.stringify(updatedCart));
            updateOrder();
            toast.success("Your order has been refunded.");
        } catch(error) {
            toast.error("An unexpected error occurred while processing the payment.");
        }
    }

    return (
        <div id='order'>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Your Order</h1>
                {order.length > 0 ? (
                    order.map((item, index) => (
                        <div key={index} className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">Order #{index + 1}</h2>
                                <p className="card-text">
                                    <strong>Transaction ID:</strong> {item.transactionId}
                                </p>
                                <p className="card-text">
                                    <strong>Total Amount:</strong> £{item.totalAmount}
                                </p>
                                <h3 className="mt-3">Products:</h3>
                                {item.cartProduct.map((product, idx) => (
                                    <div key={idx} className="product-item mb-3 p-3 border rounded">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="img-fluid rounded"
                                                />
                                            </div>
                                            <div className="col-md-9">
                                                <h4>{product.title}</h4>
                                                <p className="text-muted">{product.category}</p>
                                                <p>{product.detail}</p>
                                                <p>
                                                    <strong>Price:</strong> {product.price}
                                                </p>
                                                <p>
                                                    <strong>Color:</strong> {product.color}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    className="btn btn-danger mt-3"
                                    onClick={() => onclickRefund(item.transactionId)}
                                >
                                    Request Refund
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <NoFoundData errorMessage={"No Orders Found."} />
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Order