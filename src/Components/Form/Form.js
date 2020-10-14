import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  initialState = {
    value: ""
  };
  state = this.initialState;
  handleInput = e => {
    const { value } = e.target;
    this.setState({ value: value });
  };
  render() {
    const { handleMsg, msg } = this.props;
    const submitForm = e => {
      handleMsg(e);
      this.setState(this.initialState);
    };
    return (
      <form action="#" id="form" onSubmit={submitForm}>
        <div className="form-group">
          <div className="d-flex justify-content-center align-items-center flex-wrap h-5">
            <input
              type="email"
              id="email"
              className="form-control py-3 mt-3"
              placeholder="Enter your email address"
              required
              value={this.state.value}
              onChange={this.handleInput}
            />
            <button className="btn btn-subscribe mt-3 py-2">Subscribe</button>
          </div>
          <p className="mt-2">
            (You also get some exclusive in-app perks for registering)
          </p>
          <div className="alert alert-success">{msg}</div>
        </div>
      </form>
    );
  }
}
export default Form;
