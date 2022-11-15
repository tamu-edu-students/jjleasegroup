import React, { useState } from "react";
import APIService from "../../api/APIService";
import { saveUser } from "../../utils/cookie";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";


function LoginForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  
  const inputClass = classNames(styles.box, styles.input);

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
        window.location.href = "/";
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

  const forgetHandler = (e: any) => {
    e.preventDefault();
    window.location.href = "/ForgetPassword";
  };
  return (
    <div className={styles.form} >
      <div className={styles.container}>
        <div className={styles.group_label}>
          <label htmlFor="email">Email: </label>
          <label htmlFor="password">password: </label>
        </div>
        
        <div className={styles.group_input}>
          <input
              className= {inputClass}
              type="email"
              name="emai"
              id="email"
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              value={details.email}
            />
          <input
            className= {inputClass}
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
      </div>
      <div className={styles.container}>
        <button className={styles.button} onClick={submitHandler}>
          Login
        </button>
        <button className={styles.buttonforget} onClick={forgetHandler}>
          Forget Password?
        </button>          
      </div>
      {/*ERROR*/ error !== "" ? <div className={styles.error_message}>{error}</div> : ""}
    </div>
  );
}

export default LoginForm;
