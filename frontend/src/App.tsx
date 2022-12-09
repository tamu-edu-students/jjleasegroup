import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import ForgetPasswordPage from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
// import MyProfile from "./components/MyProfile";
import Austin from "./pages/Austin";
import CollegeStation from "./pages/CollegeStation";
import ContactUs from "./pages/ContactUs";
import { useEffect, useState } from "react";
import { getUser, UserInfo } from "./utils/cookie";
import Admin from "./pages/Admin";
import MyMessages from "./pages/MyMessages";
import ProfilePage from "./pages/MyProfile";

function App() {
  const user = getUser();
  // useEffect(() => {
  //   console.log(getUser());
  // });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/Austin" element={<Austin />} />
        <Route path="/CollegeStation" element={<CollegeStation />} />
        <Route path="/Admin" element={<Admin />} />
        {user && [
          <Route
            path="/ChangePassword"
            element={<ChangePassword userEmail={user.email} />}
          />,
          <Route path="/ContactUs" element={<ContactUs userId={user.id} />} />,
          <Route
            path="/MyProfile"
            element={<ProfilePage userId={user.id} />}
          />,
          <Route
            path="/MyMessages"
            element={<MyMessages userId={user.id} isAdmin={user.isAdmin} />}
          />,
        ]}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
