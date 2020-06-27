import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.config";

const Options = ({ currentUser }) => {
  const optionList = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
  ];
  let htmlReturn = optionList.map((op) => (
    <div key={op.name}>
      <Link to={op.link}>{op.name}</Link>
    </div>
  ));
  const UserStatus =
    currentUser.currentUser !== null ? (
      <div className="userStatus" onClick={() => auth.signOut()}>
        SignOut
      </div>
    ) : (
      <Link className="userStatus" to="/signin">
        SignIn
      </Link>
    );

  return (
    <div className="options">
      {htmlReturn}
      {UserStatus}
    </div>
  );
};

export default Options;
