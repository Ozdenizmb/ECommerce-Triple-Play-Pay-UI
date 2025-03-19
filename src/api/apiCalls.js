import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1";

const api = axios.create({
    baseURL: API_BASE_URL
})

export const tokenizedCard = (body) => {
    return api.post(`/payments/card`, body);
}

export const chargePayment = (body) => {
    return api.post(`/payments/charge`, body);
}

export const refundPayment = (transactionId) => {
    return api.post(`/payments/void/${transactionId}`);
}