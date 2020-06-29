import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.config";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";

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
    currentUser !== null ? (
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Options);
