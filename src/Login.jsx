// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./app.scss";
export const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const myFunction = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="form">
      <h2>Login</h2>
      <div className="mini">
        <div className="info">Email</div>
        <input type="email" placeholder="example@kyanon.digital" />
        <div className="info">Password</div>
        <input type={passwordType} placeholder="********" />
      </div>
      <div className="bottom">
        <div className="left">
          <input type="checkbox" id="myInput" onClick={myFunction} />
          <div>show password</div>
        </div>
        <div className="right">
          <Link to="/profileedit">
            <button>Sign In</button>
          </Link>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};
