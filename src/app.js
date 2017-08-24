import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Button, Spinner, CardSection } from "../components/common";
import firebase from "firebase";
import LoginForm from "../components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAQwcggS6Riznxsm1AcHFP7YJ9g-S2NhXY",
      authDomain: "authentication-699fd.firebaseapp.com",
      databaseURL: "https://authentication-699fd.firebaseio.com",
      projectId: "authentication-699fd",
      storageBucket: "authentication-699fd.appspot.com",
      messagingSenderId: "867700233446"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: {
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      }

      case false: {
        return <LoginForm />;
      }

      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
