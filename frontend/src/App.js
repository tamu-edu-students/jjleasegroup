import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import ContactForm from "./components/ContactForm";
import ChangePasswordForm from './components/ChangePWForm';
import APIService from "./APIService";

function App() {
  const adminUser= {
    email:"admin@admin.com",
    password: "admin"
  }
  const modes = ["login", "success_login", "change_password"];
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");
  const [mode, setMode] = useState(modes[0]);
  //password checking controller
  const checkLogin = details =>{
    //testing email and password matching
   //console.log(details.email);
    APIService.add_log_in({ //push email and password to backend
      "customer_email": details.email,
      "customer_password": details.password,
      "verification_code": details.password})
      .then(
        resp => {
            //TOCHANGE check password right or wrong here
            if (resp.code === "200"){
            console.log("Login");
            
            setUser({
              name: details.name,
              email: details.email,
            });

            setMode(modes[1]);//switch page
          }else{//TOCHANGE return wrong here password wrong
            setError(resp.error_message)
          }
        })
  }

  const Logout = () => {//log out controll

    //clear current User
    setUser({name:"", email:""});

    console.log("Logout");
    setMode(modes[0]);
  
  }
  //change password controller
  const checkOldPassword = (details,checkError) =>{
    console.log("=====step2 check old password=====");
    //testing email and password matching
    console.log("User data:"+user.email);
    console.log("Detail data:"+details.password);
    console.log("Detail new data:"+details.password_new);
    APIService.change_password({ //push email and password to backend
      "customer_email": user.email,
      "old_password": details.password,
      "new_password": details.password_new})
      .then(
        resp => {
          if (resp.code == "200"){
            //check old password 
            setError("")
            if(checkError === ""){
              setMode(modes[0]);
              console.log("Password changed"); 
            }
          }else{//old password matched 
            console.log(resp.error_message); 
            setError(resp.error_message);
          }
        })
    // if (details.password === adminUser.password){
    //   //check old password 
    //   setError("")
    //   if(checkError === ""){
    //     setMode(modes[0]);
    //     console.log("Password changed"); 
    //   }
    // }else{//old password matched 
    //   console.log("Old password wrong"); 
    //   setError("Old password wrong");
    // }
    // if(checkError === "" && error ===""){
    //   setMode(modes[0]);
    //   console.log("Password changed"); 
    // }else{
    //   console.log("errors are " + error + checkError);
    // }
  }
  const changePassword = () => {
    setMode(modes[2]);
  }

  switch(mode){
    case modes[0]:
      console.log("login form mode");
      return(<LoginForm checkLogin={checkLogin} error={error}/>);
      break;
    case modes[1]:
      console.log("logged in mode");
        
      return (
        <div className="App"> 
            <div className="welcome">
              <button onClick={Logout}>Logout</button>
              <button onClick={changePassword}>Change Password</button>
              <ContactForm/>
            </div>
        </div>
      );
      break;
    case modes[2]:
      console.log("change password mode");
      return(
        <ChangePasswordForm checkOldPassword={checkOldPassword} error={error}/>
      );
      break;
      default:
        console.log("default mode");
        return(<LoginForm checkLogin={checkLogin} error={error}/>);
    }


}

export default App;
