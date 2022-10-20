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
  const checkOldPassword = details =>{

    //testing email and password matching
    if (details.password !== adminUser.password){//check old password 
      setError("Password wrong");
      console.Log("Old password wrong");

    }else{//old password matched 
      console.Log("Password changed"); 
      setMode(modes[0]); 
    }
  }
  const changePassword = () => {
    setMode(modes[2]);
  }

  switch(mode){
    case modes[0]:
      return(<LoginForm checkLogin={checkLogin} error={error}/>);
      break;
    case modes[1]:
        console.log("successfully logged in ")
        return (

          <div className="App">
            {(user.email !== "") ? (//when succefully login 
              
              <div className="welcome">
                <h2>Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout}>Logout</button>
                <button onClick={changePassword}>Change Password</button>
              </div>
            
            ):(//when havent log in, call loginform page
              
              <LoginForm checkLogin={checkLogin} error={error}/>
            
            )}
          </div>
        );
      break;
    case modes[2]:
      return(
        <ChangePasswordForm checkOldPassword={checkOldPassword} error={error}/>
      );
      break;
      default:
        return(<LoginForm checkLogin={checkLogin} error={error}/>);
    }


}

export default App;
