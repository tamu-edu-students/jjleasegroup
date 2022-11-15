import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import SignUp from "./components/SignUp";
import ChangePasswordForm from "./components/ChangePasswordForm";
import ForgetPasswordPage from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import { deleteUser, getUser } from "./utils/cookie";
import MyProfile from "./components/MyProfile";
import Austin from "./pages/Austin";
import CollegeStation from "./pages/CollegeStation";
import React from "react";
import ContactUs from "./pages/ContactUs";

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

        <Route path="/Login" element={<LoginPage />} />
        <Route path={"/ForgetPassword"} element={<ForgetPasswordPage />} />
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
          element={<ChangePassword {...getUser()} />}
        />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path={"/Austin"} element={<Austin />} />
        <Route path={"/CollegeStation"} element={<CollegeStation />} />\
        <Route path={"/ContactUs"} element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
