import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="form">
          <h1>Login</h1>
          <form className="input-data">
            <label className="label_username" htmlFor="username">
              Username
            </label>
            <input name="username" id="username" type="text" required />

            <label className="password-label" htmlFor="password">
              Password
            </label>
            <input id="password" name="password" type="password" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
