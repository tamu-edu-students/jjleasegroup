import APIService from "../../api/APIService";
import { useEffect, useState } from "react";

type Props = {
  userId: number;
};

function MyProfile(props: Props) {
  const userId = props.userId;
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
      .then((resp) => getCustomerInfo(resp));
  };
  return (
    <div className="form">
      <label htmlFor="customer_username">your username</label>
      <input
        type="text"
        id="customer_username"
        value={username}
        placeholder="enter your new username"
        className="form-control"
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="your password">your password</label> <br />
      <button className="btn btn-primary">Change My Password</button>
      <br />
      <br />
      {/*<input type="text" value={password} placeholder="enter your new password"*/}
      {/*       className="form-control" onChange={(e) => setPassword(e.target.value)}/>*/}
      <label htmlFor="your email">your email</label>
      <input
        type="text"
        value={email}
        placeholder="enter your new email"
        className="form-control"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="your phone">your phone</label>
      <input
        type="text"
        value={phone}
        placeholder="enter your new phone"
        className="form-control"
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="your gender">your gender:</label> <br />
      <select
        name="customer_gender"
        id="customer_gender"
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
      <br />
      <br />
      <label htmlFor="your date of birth">your date of birth:</label> <br />
      <input
        type="date"
        id="customer_date_of_birth"
        name="customer_date_of_birth"
        value={dateOfBirth}
        min="1950-01-01"
        max={today}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="your security question">
        your security question:
      </label>{" "}
      <br />
      <select
        name="security_question"
        id="security_question"
        value={securityQuestion}
        onChange={(e) => setSecurityQuestion(e.target.value)}
      >
        <option value="0">What is your mother's last name?</option>
        <option value="1">Which city were you born in?</option>
        <option value="2">What is your favorite movie?</option>
      </select>
      <br />
      <br />
      <label htmlFor="your security question answer">
        your security question answer:
      </label>
      <input
        type="text"
        value={securityAnswer}
        placeholder="enter your answer"
        className="form-control"
        onChange={(e) => setSecurityAnswer(e.target.value)}
      />
      <br />
      <br />
      <button className="btn btn-primary" onClick={submitForm}>
        Update My Profile
      </button>
    </div>
  );
}

export default MyProfile;
