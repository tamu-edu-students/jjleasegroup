import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import ForgetPasswordPage from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import MyProfile from "./components/MyProfile";
import Austin from "./pages/Austin";
import CollegeStation from "./pages/CollegeStation";
import ContactUs from "./pages/ContactUs";
import { useEffect, useState } from "react";
import { getUser, UserInfo } from "./utils/cookie";

function App() {
  const [user, setUser] = useState<UserInfo | undefined>(undefined);
  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/Austin" element={<Austin />} />
        <Route path="/CollegeStation" element={<CollegeStation />} />
        {user && [
          <Route
            path="/ChangePassword"
            element={<ChangePassword userEmail={user.email} />}
          />,
          <Route path="/ContactUs" element={<ContactUs userId={user.id} />} />,
          <Route path="/MyProfile" element={<MyProfile userId={user.id} />} />,
        ]}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
