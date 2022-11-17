import APIService from "../../api/APIService";
import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";

function ForgetPassword() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [password_new, setPasswordNew] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const inputClass = classNames(styles.box, styles.input);
  const submitHandler = (e: any) => {
    e.preventDefault();
    APIService.forget_password({
      customer_email: email,
      customer_security_answer: answer,
      new_password: password_new,
    }).then((resp) => {
      if (resp.code == 200) {
        //answer is correct
        console.log("answer is correct");
        setError("");
        setFlag(false);
        window.location.href = "/Login";
      } else {
        //answer is wrong
        setError(resp.error_message);
        console.log(resp.error_message);
      }
    });
  };
  const questionGetter = (e: any) => {
    console.log("email is" + email);
    e.preventDefault();
    APIService.get_question({
      customer_email: email,
    }).then((resp) => {
      console.log(resp);
      if (resp.code === 200) {
        console.log("Successfully get question!!!");
        setQuestion(resp.customer_security_question);
        setFlag(true);
        setError("");
      } else {
        console.log("Wrong email!!!");
        setError(resp.error_message);
      }
    });
  };
  if (flag) {
    return (
      <div className={styles.form}>
        <div className={styles.container_security}>
          <div className={styles.question}>
            <label htmlFor="text">{question}</label>
          </div>

          <input
            className={inputClass}
            type="text"
            name="answer"
            id="text"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />

          <div className={styles.question}>
            <label htmlFor="password">new password </label>
          </div>
          <input
            className={inputClass}
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPasswordNew(e.target.value)}
            value={password_new}
          />

          <div className={styles.container}>
            <button className={styles.button} onClick={submitHandler}>
              submit
            </button>
          </div>
        </div>
        {
          /*ERROR*/ error !== "" ? (
            <div className={styles.error_message}>{error}</div>
          ) : (
            ""
          )
        }
      </div>
    );
  } else {
    return (
      <div className={styles.form}>
        <div className={styles.container}>
          <div className={styles.group_text}>
            <label htmlFor="email">Email: </label>
          </div>
          <div className={styles.group}>
            <input
              className={inputClass}
              type="email"
              name="emai"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className={styles.container}>
          <button className={styles.button} onClick={questionGetter}>
            submit
          </button>
        </div>
        {
          /*ERROR*/ error !== "" ? (
            <div className={styles.error_message}>{error}</div>
          ) : (
            ""
          )
        }
      </div>
    );
  }
}

export default ForgetPassword;
