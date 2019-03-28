import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import Nav from "./containers/Nav/";
import store from "./store/store";
import Footer from "./containers/Footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Nav />
        </div>
         <Footer />
      </Provider>
    );
  }
}

export default App;
