import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import '../style/CartCard.css';
import Link from 'next/link';
import data from '../../data.json';

const CartCard = ({ product }) => {

    //const product = data.products.find((product) => product.id === dataId);
    const {id = "", image = "", title = "", price = "0.00$", oldPrice = "0.00$"} = product;

    return (
        <div className="card product-card mb-3 shadow">
            <div className="row g-0">
                <div className="col-xl-3 col-md-4">
                    <a href="#" className="img-wrap">
                        <img src={image} alt="phone" />
                    </a>
                </div>
                <div className="col-xl-9 col-md-8 border-start">
                    <div className="card-body">

                        <a href="#" className="btn btn-danger btn-icon float-end">
                            <FontAwesomeIcon icon={faTrash} className="icon" />
                        </a>
                        <a href="#" className="h6 mb-3 title">
                            {title}
                        </a>

                        <div className="mb-2">
                            <div className="rating mb-2">
                                <FontAwesomeIcon icon={faStar} className="icon checked" />
                                <FontAwesomeIcon icon={faStar} className="icon checked" />
                                <FontAwesomeIcon icon={faStar} className="icon checked" />
                                <FontAwesomeIcon icon={faStar} className="icon checked" />
                                <FontAwesomeIcon icon={faStar} className="icon" />
                                <span className="text-warning ms-1">4.0</span>
                            </div>
                            <span className="text-muted me-2">In Stock</span>
                            <span className="text-success">Free shipping</span>
                        </div>

                        <div className="price-wrap mb-4">
                            <strong className="price me-2">{price}</strong>
                            <del className="price-old">{oldPrice}</del>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard