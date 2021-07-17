import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
class LandingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.login) {
      return (
        <div>
          <Login />
        </div>
      );
    }
    return (
      <div>
        <SignUp />
      </div>
    );
  }
}

export default LandingComponent;
