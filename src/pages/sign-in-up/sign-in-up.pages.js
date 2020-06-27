import React from "react";

import SignIn from "../../components/SignIn/signIn.component";
import SignUp from "../../components/SignUp/signUp.component";

import "./sign-in-up.styles.scss";

const SignInUpPage = () => {
  return (
    <div className="signinuppage">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUpPage;
