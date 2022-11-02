import { useState } from "react";
import APIService from "../../api/APIService";

function ChangePasswordForm(user: { name: string; email: string }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    password_new: "",
    password_rep: "",
  });
  const [checkError, setCheckError] = useState("");
  const [error, setError] = useState("");
  //pass through detail

  const checkOldPassword = (
    details: { password: string; password_new: string },
    checkError: string
  ) => {
    console.log("=====step2 check old password=====");
    //testing email and password matching
    console.log("User data:" + user.email);
    console.log("Detail data:" + details.password);
    console.log("Detail new data:" + details.password_new);
    APIService.change_password({
      //push email and password to backend
      customer_email: user.email,
      old_password: details.password,
      new_password: details.password_new,
    }).then((resp) => {
      if (resp.code === "200") {
        //check old password
        setError("");
        if (checkError === "") {
          console.log("Password changed");
        }
      } else {
        //old password matched
        console.log(resp.error_message);
        setError(resp.error_message);
      }
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("=====step1 check two password match=====");
    if (details.password_new !== details.password_rep) {
      console.log("two password not match");
      setCheckError("Password are not the same");
      checkOldPassword(details, "password wrong");
    } else {
      setCheckError("");
      console.log("two password match");
      checkOldPassword(details, "");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Change Password</h2>
        <div className="form-group">
          <label htmlFor="password">Old password: </label>
          <input
            type="password"
            name="password_old"
            id="password_old"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">New password: </label>
          <input
            type="password"
            name="password_new"
            id="password_new"
            onChange={(e) =>
              setDetails({ ...details, password_new: e.target.value })
            }
            value={details.password_new}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Repeat password: </label>
          <input
            type="password"
            name="password_rep"
            id="password_rep"
            onChange={(e) =>
              setDetails({ ...details, password_rep: e.target.value })
            }
            value={details.password_rep}
          />
          {
            /*ERROR*/ checkError !== "" ? (
              <div className="error">{checkError}</div>
            ) : (
              ""
            )
          }
        </div>
        <input type="submit" value="Confirm" />
        {/*ERROR*/ error !== "" ? <div className="error">{error}</div> : ""}
      </div>
    </form>
  );
}

export default ChangePasswordForm;
