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
        <React.StrictMode>
          <Header />
          <LandingComponent login={false} />
          <Box mt={8}>
            <Copyright />
          </Box>
        </React.StrictMode>
      </div>
    );
  }
}
export default App;
