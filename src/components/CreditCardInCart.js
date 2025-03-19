import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faUser, faCalendarAlt  } from '@fortawesome/free-solid-svg-icons';

const CreditCardInCart = ({ creditCard }) => {
  return (
    <div className="mb-3">
        <p className="card-text d-flex align-items-center">
            
            <div>
                <p>**** **** **** {creditCard.numberLastFourDigit}</p>
                <p>{creditCard.name}</p>
            </div>
        </p>
    </div>
  )
}

export default CreditCardInCart