import React from "react";
import "./Subscribe.css";
import Form from "../Form/Form";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      d: false
    };
    this.handleMsg = this.handleMsg.bind(this);
  }
  handleMsg(e) {
    e.preventDefault();
    this.setState({ isToggle: !this.state.isToggle });
  }
  render() {
    return (
      <section id="subscribe" className="mt-5 pt-5">
        <div className="container">
          <div className="text-center">
            <h2>Looks cool right?</h2>
            <h2>Be the first to know when we launch</h2>
            <Form handleMsg={this.handleMsg} isToggle={this.state.isToggle} />
          </div>
        </div>
      </section>
    );
  }
}
export default Subscribe;
