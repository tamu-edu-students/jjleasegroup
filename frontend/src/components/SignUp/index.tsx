import APIService from "../../api/APIService";
import {useState} from "react";

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

  const handlePassword2 = (e: any) => {
    setPassword2(e.target.value);
    if (password1 === password2) {
      setPassword(password1);
    }
  };

  const submitForm = () => {
    APIService.sign_up({
      customer_username: username,
      customer_password: password,
      customer_email: email,
      customer_phone: phone,
      customer_gender: gender,
      customer_date_of_birth: date_of_birth,
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
        onChange={handlePassword2}
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
      <select
        name="customer_gender"
        id="customer_gender"
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
      <br/>
      <br/>
      <label htmlFor="customer date of birth">Start date:</label>
      <input
        type="date"
        id="customer_date_of_birth"
        name="customer_date_of_birth"
        value={date_of_birth}
        min="1950-01-01"
        max={today}
        onChange={(e) => setDate_of_birth(e.target.value)}
      />

      <br/>
      <br/>
      <button className="btn btn-primary" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default SignUp;
