import CreditCardForm from '@/components/CreditCardForm'
import React from 'react'

const CreditCard = () => {
  return (
    <div className="container" style={{ height: '100vh' }}>
        <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
            <div className="col-12 col-md-6">
                <CreditCardForm />
            </div>
        </div>
    </div>
  )
}

export default CreditCard