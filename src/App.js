import React from "react";
import "./App.css";
import homepage from "./pages/homepage/homepage.pages";
import MensPage from "./pages/mens/mens.pages";
import Homepage from "./pages/shopPage/shopPage.pages";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.pages";

import Header from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";

import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase.config";

import CreateUserProfile from "./firebase/createUser";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/reducers/user/user.action";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/reducers/user/user.selectors";
import CheckOut from "./pages/checkoutPage/checkout.page";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userData) => {
      if (userData) {
        const userRef = await CreateUserProfile(userData);
        userRef.onSnapshot((snapShot) => {
          const userDataDb = snapShot.data();
          setCurrentUser({
            id: userRef.id,
            ...userDataDb,
          });
        });
      } else {
        setCurrentUser(userData);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/mens" component={MensPage} />
          <Route exact path="/shop" component={Homepage} />
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />
            }
          />
          <Route exact path="/checkout" component={CheckOut} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
