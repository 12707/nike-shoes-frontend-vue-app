/**
 * This file provides vue with service that request from backend.
 * The purpose of separating a file are:
 * 1, Decoupling the codes which using http request.
 * 2, It is convenient to mock request in tests.
 * @type {{headers: {"Content-Type": string}, method: string}}
 */

const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
};

function fetchData(shoeId) {
    return fetch(`api/shoe-price/`+shoeId, requestOptions).then(response => {
        return response.json()
    })
}

export default {
    fetchData
}