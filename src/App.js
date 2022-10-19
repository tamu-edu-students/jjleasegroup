import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const adminUser= {
    email:"admin@admin.com",
    password: "admin"

  }
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const checkLogin = details =>{

    //testing email and password matching
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Admin login");
      setUser({
        name: details.name,
        email: details.email,
      });
    }else{// password wrong

      if(details.password !== adminUser.password){ 
        setError("Passward wrong")
      }else{
        setError("Detail wrong")
      }
      
      console.log("Detail do not match");
    }
  }

  const Logout = () => {

    setUser({name:"", email:""});
    console.log("Logout");
  
  }
  return (

    <div className="App">
      {(user.email !== "") ? (//when succefully login 
        
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      
      ):(//when havent log in, call loginform page
        
        <LoginForm checkLogin={checkLogin} error={error}/>
      
      )}
    </div>
  );
}

export default App;
