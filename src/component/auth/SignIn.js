import React, { Component } from 'react';
import {connect} from 'react-redux';

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                        email: "",
                        password: "",
                    };
         this.inputRef = React.createRef()
    }
    

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const authentication = this.props.authData.loginData.filter((item) => {
      return (
        item.username === this.state.email &&
        item.password === this.state.password
      );
    });

    if (authentication.length > 0) {
      this.props.validate();
      this.props.history.push('/dashboard');
    }
    else{
        alert('Check Username or Password');
        this.setState({
            email: '',
            password:''
        })
        this.inputRef.current.focus();
    }

  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              ref={this.inputRef}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button
              className="btn teal lighten-1 z-depth-0"
              disabled={!(this.state.email && this.state.password)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state ) => {
  return {
    authData: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      validate: () => dispatch({type: "LOGGED_IN"})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)