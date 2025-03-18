'use client';
import React, { useState } from 'react'
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { ToastContainer, toast } from 'react-toastify';
import crypto from "crypto";

const CreditCardForm = () => {
    const [token, setToken] = useState("");
    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        name: "",
        focus: "",
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleInputFocus = (e) => {
        setState((prev) => ({ ...prev, focus: e.target.name }));
    };
    
    const onClickSave = (event) => {
        event.preventDefault();
        const cardData = `${state.number}-${state.expiry}-${state.cvc}`;
        const hashedToken = crypto.createHash("sha256").update(cardData).digest("hex");
        setToken(hashedToken);
        toast.success("Your credit card has been saved successfully.");
    }
    
      return (
        <div className="container">
            <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <div className="mt-3 ">
                <form>
                <div className="mb-3">
                    <input
                    type="number"
                    name="number"
                    className="form-control"
                    placeholder="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    />
                </div>
                <div className="mb-3">
                    <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                    />
                </div>
                <div className="row">
                    <div className="col-6 mb-3">
                    <input
                        type="number"
                        name="expiry"
                        className="form-control"
                        placeholder="Valid Thru"
                        pattern="\d\d/\d\d"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    </div>
                    <div className="col-6 mb-3">
                    <input
                        type="number"
                        name="cvc"
                        className="form-control"
                        placeholder="CVC"
                        pattern="\d{3,4}"
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    </div>
                </div>
                <div className="d-grid">
                    <button className="btn btn-dark" onClick={onClickSave}>Save</button>
                </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CreditCardForm