const baseUrl = "http://127.0.0.1:8000/";
export default class APIService {
  static add_question_consulation(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "question_consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static sign_up(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static add_log_in(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static change_password(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "change_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}