import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import ChangePasswordForm from './components/ChangePWForm';
//import APIService from "/APIService";

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
   
    // APIService.add_log_in({ //push email and password to backend
    //   "email": details.question_purpose,
    //   "password": details.apt_area})
    //   .then(resp => console.log(resp))

    //TOCHANGE check password right or wrong here
    if (details.email === adminUser.email && 
        details.password === adminUser.password){
      console.log("Admin login");
      
      setUser({
        name: details.name,
        email: details.email,
      });

      setMode(modes[1]);//switch page
      //setError("");

    }else{//TOCHANGE return wrong here password wrong

      if(details.password !== adminUser.password){ 
        setError("Password wrong")
      }else{
        setError("Detail wrong")
      }

    }

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
    console.log("detail password is " + details.password);
    console.log("detail password is " + adminUser.password);
    console.log("two password match " + checkError);
    if (details.password === adminUser.password){
      //check old password 
      setError("")
      if(checkError === ""){
        setMode(modes[0]);
        console.log("Password changed"); 
      }
    }else{//old password matched 
      console.log("Old password wrong"); 
      setError("Old password wrong");
    }
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
