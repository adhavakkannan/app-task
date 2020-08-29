import React, { Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { connect } from "react-redux";


import NavBar from './component/layout/NavBar';
import Dashboard from './component/dashboard/Dashboard';
import SignIn from './component/auth/SignIn';
import Home from './component/layout/Home';
import Logout from './component/layout/Logout';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  

  render() {
    //console.log(this.props.authData.isLoggedIn)
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};


export default connect(mapStateToProps)(App);