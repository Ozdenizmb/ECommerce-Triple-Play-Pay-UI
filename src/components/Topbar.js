'use client';
import React, { useState } from 'react'
import '../style/Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart, faSearch, faCreditCard, faCogs, faSignOutAlt, faBagShopping, faMoneyBillTrendUp  } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const Topbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="top-bar">
            <div className="container">
                <div className="row gy-3 align-items-center">

                    <div className="col-4 col-lg-2 col-sm-4">
                        <Link href="/" className="navbar-brand text-primary fs-5">E-Commerce</Link>
                    </div>

                    <div className="col-8 col-lg-5 order-lg-last col-sm-8">
                        <div className="text-end">
                            <div className="dropdown">
                                <button className="btn btn-light me-1" onClick={toggleDropdown}>
                                    <FontAwesomeIcon icon={faUser} className="icon" />
                                    <span className="ms-1 d-none d-sm-inline-block">Account</span>
                                </button>
                                {isDropdownOpen && (
                                    <div className="dropdown-menu show">
                                        <div className="dropdown-item">
                                            <FontAwesomeIcon icon={faUser} className="icon me-2" />
                                            Profile
                                        </div>
                                        <Link href="/credit-card" className="dropdown-item">
                                            <FontAwesomeIcon icon={faCreditCard} className="icon me-2" />
                                            Credit Card
                                        </Link>
                                        <Link href="/tpp-credit-card" className="dropdown-item">
                                            <FontAwesomeIcon icon={faMoneyBillTrendUp} className="icon me-2" />
                                            TPP Credit Card
                                        </Link>
                                        <Link href="/order" className="dropdown-item">
                                            <FontAwesomeIcon icon={faBagShopping} className="icon me-2" />
                                            Order
                                        </Link>
                                        <div className="dropdown-item">
                                            <FontAwesomeIcon icon={faCogs} className="icon me-2" />
                                            Settings
                                        </div>
                                        <div className="dropdown-item">
                                            <FontAwesomeIcon icon={faSignOutAlt} className="icon me-2" />
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </div>
                            <a className="btn btn-light me-1">
                                <FontAwesomeIcon icon={faHeart} className="icon" />
                                <span className="ms-1 d-none d-sm-inline-block">Favorites</span>
                            </a>
                            <Link href="/cart" className="btn btn-light me-1">
                                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                                <span className="ms-1 d-none d-sm-inline-block">Cart</span>
                            </Link>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className="input-group">
                            <input type="text" placeholder="Search E-Commerce" className="form-control" />
                            <button className="btn btn-primary btn-size">
                                <FontAwesomeIcon icon={faSearch} className="icon" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Topbar