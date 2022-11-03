import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";
import ChangePasswordForm from "./components/ChangePasswordForm";
import Home from "./pages/home";

function App() {
  const [user, setUser] = React.useState({ name: "", email: "" });
  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<LoginForm setUser={setUser} />} />
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
          element={<ChangePasswordForm {...user} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
