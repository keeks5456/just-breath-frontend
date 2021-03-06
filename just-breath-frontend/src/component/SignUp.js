import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signup } from "../actions/index.js";
import { Link, withRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransitions } from "../pageTransition";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      avatar: "",
      bio: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state).then(
      (res) => {
        this.props.history.push("/login");
      },
      (err) => {
        this.setState({
          errorMessage: (err.message = "Username or Password are Incorrect"),
        });
        console.log(err);
      }
    );
  }

  render() {
    return (
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransitions}
        className="row"
      >
        <div className="col-md-4 col-md-offset-4">
          <form className="form-signup" onSubmit={this.onSubmit}>
            <h1>Sign up!</h1>
            <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="avatar">Avatar: </label>
              <input
                type="text"
                id="avatar"
                name="avatar"
                value={this.state.avatar}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio: </label>
              <input
                type="text"
                id="bio"
                name="bio"
                value={this.state.bio}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <div className="form-group">
                <label htmlFor="password_confirmation">
                  password_confirmation:{" "}
                </label>
                <input
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Sign up</button>
            </div>
            <p>
              Well hello there! Already have an account!? Please login{" "}
              <Link to="/login">here :)</Link>
            </p>
          </form>
        </div>
      </motion.div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default withRouter(connect(null, { signup })(Signup));
