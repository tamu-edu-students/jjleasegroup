import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import ForgetPasswordPage from "./pages/ForgetPassword";
import ChangePassword from "./pages/ChangePassword";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Austin from "./pages/Austin";
import CollegeStation from "./pages/CollegeStation";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import { getUser } from "./utils/cookie";
import Admin from "./pages/Admin";
import MyMessages from "./pages/MyMessages";
import ProfilePage from "./pages/MyProfile";
import Schedule from "./pages/Schedule";
import EditApartment from "./pages/EditApartment";
import AddApartment from "./pages/AddApartment";

function App() {
  const user = getUser();
  useEffect(() => {
    console.log(user?.isAdmin);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/Austin" element={<Austin />} />
        <Route path="/CollegeStation" element={<CollegeStation />} />
        <Route path="/Schedule" element={<Schedule />} />
        {user &&
          (user.isAdmin
            ? [
                <Route path="/Admin" element={<Admin />} />,
                <Route
                  path="/MyMessages"
                  element={<MyMessages userId={user.id} isAdmin={true} />}
                />,
                <Route path="AddApartment" element={<AddApartment />} />,
                <Route path="EditApartment" element={<EditApartment />} />,
              ]
            : [
                <Route
                  path="/ChangePassword"
                  element={<ChangePassword userEmail={user.email} />}
                />,
                <Route
                  path="/ContactUs"
                  element={<ContactUs userId={user.id} />}
                />,
                <Route
                  path="/MyProfile"
                  element={<ProfilePage userId={user.id} />}
                />,
                <Route
                  path="/MyMessages"
                  element={<MyMessages userId={user.id} isAdmin={false} />}
                />,
              ])}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
