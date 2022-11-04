import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import ChangePasswordForm from "./components/ChangePasswordForm";
import ForgetPassword from "./components/ForgetPassword";
import Home from "./pages/home";
import { deleteUser, getUser } from "./utils/cookie";


function App() {
  const Logout = () => {
    deleteUser();
    window.location.href = "/Login";
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route 
          path="/Login" 
          element={
              <div>
                <LoginForm /> 
                <button
                onClick={() => {
                  window.location.href = "/ForgetPassword";
                }}
              >
                Forget password
              </button>
            </div>
          } />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route
          path="/Success"
          element={
            <div>
              <button onClick={Logout}>Logout</button>
              <button
                onClick={() => {
                  window.location.href = "/ChangePassword";
                }}
              >
                Change Password
              </button>
            </div>
          }
        />
        <Route
          path="/ChangePassword"
          element={<ChangePasswordForm {...getUser()} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
