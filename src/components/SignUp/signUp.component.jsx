import React from "react";
import CustomInput from "../Custom-input/customInput.components";
import CustomButton from "../CustomButton/customButton.component";

import CreateUserProfile from "../../firebase/createUser";
import { auth } from "../../firebase/firebase.config";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await CreateUserProfile(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="signUp">
        <div>
          <h1 className="signUp-heading">Create an account</h1>
          <p className="signUp-para">Sign Up with your email.</p>
        </div>
        <div>
          <form className="signUp-form" onSubmit={this.handleSubmit}>
            <CustomInput
              name="displayName"
              type="text"
              value={this.state.displayName}
              onChange={this.handleChange}
              label="Username"
            />
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
            <CustomInput
              name="confirmPassword"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              label="Confirm Password"
            />
            <div className="signUp-buttons">
              <CustomButton
                newClass="signUp-btn"
                text="Sign Up"
                type="submit"
                color="black"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
