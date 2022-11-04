import React, { useState } from "react";
import APIService from "../../api/APIService";
import { saveUser } from "../../utils/cookie";

function LoginForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const checkLogin = (details: {
    name: string;
    email: string;
    password: string;
  }) => {
    //testing email and password matching
    //console.log(details.email);
    APIService.add_log_in({
      //push email and password to backend
      customer_email: details.email,
      customer_password: details.password,
      verification_code: details.password,
    }).then((resp) => {
      //TOCHANGE check password right or wrong here
      if (resp.code === "200") {
        console.log("Login");

        saveUser({
          name: details.name,
          email: details.email,
        });
        // setUser({
        //   name: details.name,
        //   email: details.email,
        // });
        window.location.href = "/Success";
      } else {
        //TOCHANGE return wrong here password wrong
        setError(resp.error_message);
      }
    });
  };
  //pass through detail
  const submitHandler = (e: any) => {
    e.preventDefault();
    checkLogin(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="emai"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
        {/*ERROR*/ error !== "" ? <div className="error">{error}</div> : ""}
      </div>
    </form>
  );
}

export default LoginForm;
