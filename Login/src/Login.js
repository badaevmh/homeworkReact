import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Sign in FORM</h2>
        <form>
          <div>
            <label>Login:</label>
            <input id="login" type="text" />
          </div>
          <div>
            <label>Password:</label>
            <input id="password" type="password" />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
