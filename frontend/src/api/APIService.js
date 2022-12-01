const baseUrl = "https://ec2-18-233-157-141.compute-1.amazonaws.com:8000/";
export default class APIService {
  static add_question_consultation(body) {
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

  static get_account_info(customer_id) {
    // console.log(customer_id)
    return fetch(baseUrl + "customer/" + customer_id.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => resp.json());
  }

  static update_account_info(body) {
    // console.log(JSON.stringify(body))
    return fetch(baseUrl + "customer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static customer_log_in(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "customer_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static admin_log_in(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "admin_login", {
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

  static forget_password(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "get_back_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static get_question(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "get_question_text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static get_apt_info() {
    return fetch(baseUrl + "apt_info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
	"Access-Control-Allow-Origin": "https://ec2-deploy-2.d55nij51nmuro.amplifyapp.com",
      },
    }).then((resp) => resp.json());
  }

  static add_apt_info(body) {
    console.log(JSON.stringify(body));
    return fetch(baseUrl + "apt_info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
