import React from "react";

import SignIn from "../../components/SignIn/signIn.component";

import "./sign-in-up.styles.scss";

const SignInUpPage = () => {
  return (
    <div className="signinuppage">
      <SignIn />
      <div className="signUp">SignUp</div>
    </div>
  );
};

export default SignInUpPage;
