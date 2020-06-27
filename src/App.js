import React from "react";
import "./App.css";
import homepage from "./pages/homepage/homepage.pages";
import MensPage from "./pages/mens/mens.pages";
import Homepage from "./pages/shopPage/shopPage.pages";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.pages";

import Nav from "./components/Header/header.component";
import Footer from "./components/Footer/footer.component";

import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.config";

import CreateUserProfile from "./firebase/createUser";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userData) => {
      if (userData) {
        const userRef = await CreateUserProfile(userData);
        userRef.onSnapshot((snapShot) => {
          const userDataDb = snapShot.data();
          this.setState({
            currentUser: userRef.id,
            ...userDataDb,
          });
        });
      } else {
        this.setState({ currentUser: userData });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Nav currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/mens" component={MensPage} />
          <Route exact path="/shop" component={Homepage} />
          <Route exact path="/signIn" component={SignInUpPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
