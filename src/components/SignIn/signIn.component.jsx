import React from "react";

import CustomInput from "../Custom-input/customInput.components";
import CustomButton from "../CustomButton/customButton.component";

import { SignInWithGoogle } from "../../firebase/firebase.config";
import { auth } from "../../firebase/firebase.config";

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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
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
            <div className="signIn-buttons">
              <CustomButton
                newClass="signIn-btn"
                text="Sign In"
                type="submit"
                color="#d7f171"
              />
              <CustomButton
                newClass="signIn-btn-google"
                text="Sign In With Google"
                color="#5bc489"
                type="button"
                onClick={SignInWithGoogle}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
