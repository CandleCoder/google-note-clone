import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Copyright from "./components/Copyright";
import Box from "@material-ui/core/Box";
import SignUp from "./components/SignUp";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SignUp />
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    );
  }
}
export default App;
