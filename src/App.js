import React from "react";
import "./App.css";
import Header from "./components/Header";
import Copyright from "./components/Copyright";
import LandingComponent from "./components/LandingComponent";
import Box from "@material-ui/core/Box";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <LandingComponent login={false} />
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    );
  }
}
export default App;
