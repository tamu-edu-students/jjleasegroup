import APIService from "../../api/APIService";
import React, { useEffect, useState } from "react";
import classNames from "../../utils/classNames";
import styles from "../MyProfile/styles.module.scss";

type Props = {
  userId: number;
};

function MyProfile(props: Props) {
  const userId = props.userId;
  // const userId = 2;
  // window.sessionStorage.setItem("customer_id", "17");

  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("f");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("0");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const today = new Date().toISOString().slice(0, 10);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showSubmit, setShowSubmit] = useState(false);
  const inputClass = classNames(styles.box, styles.input);

  const getCustomerInfo = (customer: any) => {
    // TODO: type this
    console.log(customer);

    setUsername(customer.customer_username);
    // setPassword(customer.customer_password);
    setEmail(customer.customer_email);
    setPhone(customer.customer_phone);
    setGender(customer.customer_gender);
    setDateOfBirth(customer.customer_date_of_birth);
    setSecurityQuestion(customer.customer_security_question);
    setSecurityAnswer(customer.customer_security_answer);
    console.log(username);
  };

  useEffect(() => {
    console.log(userId);
    APIService.get_account_info(userId).then((resp) => {
      getCustomerInfo(resp);
      console.log(resp);
    });
  }, [userId]);

  const edit_profile = () => {
    setIsDisabled(!isDisabled);
    setShowSubmit(!showSubmit);
  };

  const redirect2change_pwd = () => {
    window.location.href = "/ChangePassword";
  };

  const submitForm = () => {
    APIService.update_account_info(
      // id,
      {
        customer_id: userId,
        customer_username: username,
        // "customer_password": password,
        customer_email: email,
        customer_phone: phone,
        customer_gender: gender,
        customer_date_of_birth: dateOfBirth,
        customer_security_question: securityQuestion,
        customer_security_answer: securityAnswer,
      }
    )
      // .then(resp => console.log(resp))
      .then((resp) => {
        getCustomerInfo(resp);
        setIsDisabled(!isDisabled);
        setShowSubmit(!showSubmit);
      });
  };
  return (
    <div className={styles.form}>
      <div className={styles.container}>
        <div className={styles.group_label}>
          <label htmlFor="username">Username: </label>
          <label htmlFor="password">Password: </label>
          <label htmlFor="email">Email: </label>
          <label htmlFor="phone">Phone: </label>
          <label htmlFor="gender">Gender: </label>
          <label htmlFor="date_of_birth">Date of Birth: </label>
          <label htmlFor="securityQuestion">Security Question: </label>
          <label htmlFor="securityAnswer">Your Answer: </label>
        </div>
        <div className={styles.group_input}>
          <input
            disabled={isDisabled}
            type="text"
            id="username"
            name={"username"}
            value={username}
            placeholder="enter your new username"
            className={inputClass}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className={styles.button} onClick={redirect2change_pwd}>
            Change My Password
          </button>
          <input
            disabled={true}
            type="text"
            value={email}
            name={"email"}
            id="email"
            placeholder="enter your new email"
            className={inputClass}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            disabled={isDisabled}
            type="text"
            value={phone}
            name="phone"
            id="phone"
            placeholder="enter your new phone"
            className={inputClass}
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            disabled={isDisabled}
            className={inputClass}
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
          <input
            disabled={isDisabled}
            className={inputClass}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            min="1950-01-01"
            max={today}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
          <select
            disabled={isDisabled}
            className={inputClass}
            name="securityQuestion"
            id="securityQuestion"
            value={securityQuestion}
            onChange={(e) => setSecurityQuestion(e.target.value)}
          >
            <option value="0">What is your mother's last name?</option>
            <option value="1">Which city were you born in?</option>
            <option value="2">What is your favorite movie?</option>
          </select>
          <input
            disabled={isDisabled}
            type="text"
            value={securityAnswer}
            placeholder="enter your answer"
            className={inputClass}
            onChange={(e) => setSecurityAnswer(e.target.value)}
          />
        </div>
      </div>

      {!showSubmit && (
        <button type="button" className={styles.button} onClick={edit_profile}>
          Edit My Profile
        </button>
      )}
      {showSubmit && (
        <button className={styles.button} onClick={submitForm}>
          Submit
        </button>
      )}
    </div>
  );
}

export default MyProfile;
