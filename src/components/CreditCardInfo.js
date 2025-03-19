import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUser, faCalendarAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../style/CreditCardInfo.css';

const CreditCardInfo = ({ creditCard, onRemove }) => {

    const onClickTrash = () => {
        onRemove(creditCard.token);
    }

    return (
        <div id='credit-cart-info'>
            <div className="credit-card-container">
                <div className="credit-card">
                    <div className="credit-card-header">
                        <FontAwesomeIcon icon={faCreditCard} className="credit-card-icon" />
                        <h3>Credit Card Information</h3>
                    </div>
                    <div className="credit-card-body">
                        <div className="credit-card-info">
                            <FontAwesomeIcon icon={faCreditCard} className="info-icon" />
                            <div className="info-text">
                                <span className="info-label">Last 4 Digit</span>
                                <span className="info-value">**** **** **** {creditCard.numberLastFourDigit}</span>
                            </div>
                        </div>
                        <div className="credit-card-info">
                            <FontAwesomeIcon icon={faUser} className="info-icon" />
                            <div className="info-text">
                                <span className="info-label">Cardholder</span>
                                <span className="info-value">{creditCard.name}</span>
                            </div>
                        </div>
                        <div className="credit-card-info-trash">
                            <div className='credit-card-info'>
                                <FontAwesomeIcon icon={faCalendarAlt} className="info-icon" />
                                <div className="info-text">
                                    <span className="info-label">Expiration Date</span>
                                    <span className="info-value">{creditCard.expiry}</span>
                                </div>
                            </div>
                            <div className='trash-button' onClick={onClickTrash}>
                                <FontAwesomeIcon icon={faTrash} className="trash" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCardInfo;