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
}