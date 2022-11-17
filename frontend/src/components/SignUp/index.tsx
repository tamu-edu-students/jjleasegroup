import APIService from "../../api/APIService";
import { useState } from "react";

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

  // const handlePassword2 = (e: any) => {
  //   console.log(1);
  //   console.log(password1);
  //   setPassword2(e.target.value);
  //   if (password1 === password2) {
  //     setPassword(password1);
  //     console.log(password);
  //   }
  // };

  const submitForm = () => {
    console.log(1);
    console.log(password1);
    console.log(2);
    console.log(password2);
    if (password1 === password2) {
      setPassword(password1);
      console.log("password");
      console.log(password);
    }
    APIService.sign_up({
      customer_username: username,
      customer_password: password,
      customer_email: email,
      customer_phone: phone,
      customer_gender: gender,
      customer_date_of_birth: date_of_birth,
      customer_security_question: securityQuestion,
      customer_security_answer: securityAnswer,
    }).then((resp) => console.log(resp));
    window.location.href = "/LogIn";
  };

  return (
    <div className="form">
      <input
        type="text"
        value={username}
        placeholder="enter your username"
        className="form-control"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password1}
        placeholder="enter your password"
        className="form-control"
        onChange={(e) => setPassword1(e.target.value)}
      />
      <input
        type="text"
        value={password2}
        placeholder="repeat your password"
        className="form-control"
        // onChange={handlePassword2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="enter your email"
        className="form-control"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        placeholder="enter your phone"
        className="form-control"
        onChange={(e) => setPhone(e.target.value)}
      />
      <label htmlFor="customer gender">select your gender:</label>
      <br />
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
      <label htmlFor="customer date of birth">your date of birth:</label>
      <br />
      <input
        type="date"
        id="customer_date_of_birth"
        name="customer_date_of_birth"
        value={date_of_birth}
        min="1950-01-01"
        max={today}
        onChange={(e) => setDate_of_birth(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="security question">select your security question:</label>
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
        Submit
      </button>
    </div>
  );
}

export default SignUp;
