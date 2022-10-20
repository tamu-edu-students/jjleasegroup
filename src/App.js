import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import ChangePasswordForm from './components/ChangePWForm';

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
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Admin login");
      setUser({
        name: details.name,
        email: details.email,
      });
      setMode(modes[1]);
      //setError("");

    }else{// password wrong

      if(details.password !== adminUser.password){ 
        setError("Password wrong")
      }else{
        setError("Detail wrong")
      }
      
      console.log("Detail do not match");
    }
  }

  const Logout = () => {//log out controll

    setUser({name:"", email:""});
    console.log("Logout");
    setMode("login");
  
  }

  //change password controller
  const checkOldPassword = (details,checkError) =>{
    console.log("=====step2 check old password=====");
    //testing email and password matching
    console.log(details)
    if (details.password !== adminUser.password){
      //check old password 
      setError("Old password wrong")
      console.log(error);
    }else{//old password matched 
      console.log("Old password right"); 
      setError("")
    }
    if(checkError === "" && error ===""){
      setMode(modes[0]);
      console.log("Password changed"); 
    }else{
      console.log("errors are " + error + checkError);
    }
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
