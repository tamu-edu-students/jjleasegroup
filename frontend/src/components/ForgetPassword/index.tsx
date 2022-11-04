
import APIService from "../../api/APIService";
import { useState } from "react";


function ForgetPassword() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [password_new, setPasswordNew] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    APIService.forget_password({
      customer_email: email,
      customer_security_answer: answer,
      new_password: password_new
    }).then((resp) =>{
      if(resp.code == "200"){
        //answer is correct
        console.log("answer is correct");
        setError("")
        setFlag(false)
      }else{
        //answer is wrong
        setError(resp.error_message);
        console.log(resp.error_message);
      }
    });
  };
  const questionGetter = (e: any) => {
    console.log("email is"+ email);
    e.preventDefault();
    APIService.get_question({
      customer_email: email,
    }).then((resp) =>{
      if(resp.code == "200"){
        console.log("Successfully get question!!!")
        console.log(console.log("Successfully get question!!!"))
        setQuestion(resp.customer_security_question);
        setFlag(true);
        setError("")

      }else{
        console.log("Wrong email!!!")
        setError(resp.error_message)
      }
    }
    );
  }
  if(flag){ 
    return (
      <form onSubmit={submitHandler}>
        <div className="form-inner">
              <h2>Forget Password</h2>
          <div className="form-group">
            <label htmlFor="text">{question}</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="answer"
              id="text"
              onChange={(e) =>
                setAnswer(e.target.value)
              }
              value={answer}
            />
          </div>
          <div className="form-group">
          <label htmlFor="password">password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setPasswordNew(e.target.value)
            }
            value={password_new}
          />
        </div>
          <input type="submit" value="Check" />
          {/*ERROR*/ error !== "" ? <div className="error">{error}</div> : ""}
        </div>
      </form>
    );
  }   
  else{
    return (
      <form onSubmit={questionGetter}>
        <div className="form-inner">
          <h2>Forget Password</h2>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="emai"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <input type="submit" value="Check" />
          {/*ERROR*/ error !== "" ? <div className="error">{error}</div> : ""}
        </div>
      </form>
    );
  }
  
}
export default ForgetPassword;
