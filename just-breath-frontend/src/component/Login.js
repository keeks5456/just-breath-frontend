import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index.js';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  onSubmit(e) {
      debugger
    e.preventDefault();
      this.props.login(this.state).then(
        // make sure we use arrow functions to bind `this` correctly
        (res) => this.props.history.push('/welcome'),
        (err) => {
        });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" value={password} onChange={this.onChange}/>
          </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <div>
      <p>Hello there! Please sign up <Link to="/SignUp">here</Link> if this is your first time!</p>
      </div>
      </div>
      </div>
    );
  }
}
// insert cute emoji pic 

// let's add some propTypes for additional validation and readability
LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

// we do not want any state mapped to props, so let's make that first parameter to connect `null`
export default withRouter(connect(null, { login })(LoginForm));