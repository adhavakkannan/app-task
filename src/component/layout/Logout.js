import React, { Component } from "react";
import { connect } from "react-redux";

class Logout extends Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    
    return (
      <div className = "container">
        <h3 className="center-text">
            User has been logged out
        </h3>
        {this.props.authData.isLoggedIn ? this.handleLogout() : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type: "LOGGED_OUT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
