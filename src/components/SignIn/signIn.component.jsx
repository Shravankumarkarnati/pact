import React from "react";

import CustomInput from "../Custom-input/customInput.components";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { type, value } = e.target;
    this.setState({
      [type]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="signIn">
        <div>
          <h1 className="signIn-heading">I already have an account</h1>
          <p className="signIn-para">Sign in with your email and password.</p>
        </div>
        <div>
          <form className="signIn-form" onSubmit={this.handleSubmit}>
            <CustomInput
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              label="email"
            />
            <CustomInput
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              label="password"
            />
            <button className="signIn-btn">Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
