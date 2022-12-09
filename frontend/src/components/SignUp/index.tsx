import APIService from "../../api/APIService";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("f");
  const [date_of_birth, setDate_of_birth] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const today = new Date().toISOString().slice(0, 10);
  const [securityQuestion, setSecurityQuestion] = useState("0");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const inputClass = classNames(styles.box, styles.input);
  const [errorPwd, setErrorPwd] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  useEffect(() => {
    if (password1 === password2) {
      setPassword(password1);
      setErrorPwd("");
    } else {
      setErrorPwd("passwords are not the same!");
      // alert("passwords are not the same!")
    }
  }, [password1, password2]);

  const check_email = (email: string) => {
    setEmail(email);
    APIService.check_email(email).then((resp) => {
      if (resp.code == "200") {
        setErrorEmail("Email Already Registered!");
      } else {
        if (
          /^[\w0-9]+([\.-]?[\w0-9]+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        ) {
          setErrorEmail("");
          // setEmail(email)
        } else {
          setErrorEmail("Invalid Email!");
        }
      }
    });
  };

  const check_phone = (phone: string) => {
    setPhone(phone);
    if (/\d{10}/.test(phone)) {
      setErrorPhone("");
    } else {
      setErrorPhone("Invalid Phone!");
    }
  };

  const submitForm = () => {
    if (
      !email &&
      !errorPwd &&
      !errorPhone &&
      username &&
      password &&
      email &&
      phone &&
      securityAnswer
    ) {
      APIService.sign_up({
        customer_username: username,
        customer_password: password,
        customer_email: email,
        customer_phone: phone,
        customer_gender: gender,
        customer_date_of_birth: date_of_birth,
        customer_security_question: securityQuestion,
        customer_security_answer: securityAnswer,
      }).then((resp) => {
        if (resp.code == "200") {
          window.location.href = "/Login";
        } else {
          console.log("failed");
        }
      });
    } else {
      alert("Invalid information entered!");
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <div className={styles.group_label}>
          <label htmlFor="username">Username: </label>
          <label htmlFor="password">Password: </label>
          <br /> <br />
          <label htmlFor="email">Email: </label>
          <label htmlFor="phone">Phone: </label>
          <label htmlFor="gender">Gender: </label>
          <label htmlFor="date_of_birth">Date of Birth: </label>
          <label htmlFor="securityQuestion">Security Question: </label>
          <label htmlFor="securityAnswer">Your Answer: </label>
        </div>

        <div className={styles.group_input}>
          <input
            className={inputClass}
            type="text"
            name="username"
            id="username"
            placeholder="enter your username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            className={inputClass}
            type="password"
            name="password1"
            id="password1"
            placeholder="enter your password"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
          />
          <input
            className={inputClass}
            type="password"
            name="password2"
            id="password2"
            placeholder="repeat your password"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
          {errorPwd && <div className={styles.error_message}>{errorPwd}</div>}
          <input
            className={inputClass}
            type="email"
            value={email}
            placeholder="enter your email"
            onChange={(e) => check_email(e.target.value)}
          />
          {errorEmail && (
            <div className={styles.error_message}>{errorEmail}</div>
          )}
          <input
            className={inputClass}
            type="text"
            value={phone}
            placeholder="enter your phone"
            onChange={(e) => check_phone(e.target.value)}
          />
          {errorPhone && (
            <div className={styles.error_message}>{errorPhone}</div>
          )}
          <select
            name="gender"
            id="gender"
            className={inputClass}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={date_of_birth}
            min="1950-01-01"
            max={today}
            className={inputClass}
            onChange={(e) => setDate_of_birth(e.target.value)}
          />
          <select
            name="securityQuestion"
            id="securityQuestion"
            value={securityQuestion}
            className={inputClass}
            onChange={(e) => setSecurityQuestion(e.target.value)}
          >
            <option value="0">What is your mother's last name?</option>
            <option value="1">Which city were you born in?</option>
            <option value="2">What is your favorite movie?</option>
          </select>
          <input
            type="text"
            value={securityAnswer}
            placeholder="enter your answer"
            className={inputClass}
            onChange={(e) => setSecurityAnswer(e.target.value)}
          />
        </div>
      </div>
      <button className={styles.button} onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default SignUp;
