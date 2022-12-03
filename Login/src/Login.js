import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Sign in FORM</h2>
        <form>
          <div>
            <label>Login:</label>
            <input id="login" type="text" autoComplete={"on"} />
          </div>
          <div>
            <label>Password:</label>
            <input id="password" type="password" autoComplete={"on"} />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
