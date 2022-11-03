import data from "bootstrap/js/src/dom/data";

export default class APIService {
    static add_question_consulation(body) {
        console.log(JSON.stringify(body))
        return fetch('http://127.0.0.1:8000/question_consultation', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static sign_up(body) {
        console.log(JSON.stringify(body))
        return fetch('http://127.0.0.1:8000/customer', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static get_account_info(customer_id) {
        // console.log(customer_id)
        return fetch('http://127.0.0.1:8000/customer/' + customer_id.toString(), {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
    }

    static update_account_info(body) {
        // console.log(JSON.stringify(body))
        return fetch('http://127.0.0.1:8000/customer', {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}