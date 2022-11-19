import React, { useState } from "react";
import APIService from "../../api/APIService";
import { saveUser } from "../../utils/cookie";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";

type Info = {
  // name: string;
  email: string;
  password: string;
};

function LoginForm() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const inputClass = classNames(styles.box, styles.input);

  const checkLogin = (info: Info) => {
    const api = isAdmin ? APIService.admin_log_in : APIService.customer_log_in;
    api({
      //push email and password to backend
      email: email,
      password: password,
      verification_code: password,
    }).then((resp) => {
      if (resp.code == "200") {
        saveUser({
          id: resp.id,
          name: resp.name,
          email: email,
        });
        window.location.href = "/";
      } else {
        setError(resp.error_message);
      }
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <div className={styles.group_label}>
          <label htmlFor="email">Email: </label>
          <label htmlFor="password">password: </label>
        </div>

        <div className={styles.group_input}>
          <input
            className={inputClass}
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className={inputClass}
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <div className={styles.row}>
        <input
          type="checkbox"
          name="admin"
          id="admin"
          className={styles.radio}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
        <label htmlFor="admin">Login as Admin</label>
      </div>
      <button
        className={styles.button}
        onClick={() => checkLogin({ email, password })}
      >
        Login
      </button>
      {error && <div className={styles.error_message}>{error}</div>}
    </div>
  );
}

export default LoginForm;
