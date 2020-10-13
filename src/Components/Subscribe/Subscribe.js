import React from "react";
import "./Subscribe.css";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "", e: "g" };
    this.handleMsg = this.handleMsg.bind(this);
  }
  handleMsg(e) {
    e.preventDefault();
    this.setState({ msg: "Subscribed" });
  }
  render() {
    return (
      <section id="subscribe" className="mt-5 pt-5">
        <div className="container">
          <div className="text-center">
            <h2>Looks cool right?</h2>
            <h2>Be the first to know when we launch</h2>
            <form action="#" id="form" onSubmit={this.handleMsg}>
              <div className="form-group">
                <div className="d-flex justify-content-center align-items-center flex-wrap h-5">
                  <input
                    type="email"
                    id="email"
                    className="form-control py-3 mt-3"
                    placeholder="Enter your email address"
                    required
                  />
                  <button className="btn btn-subscribe mt-3 py-2">
                    Subscribe
                  </button>
                </div>
                <p className="mt-2">
                  (You also get some exclusive in-app perks for registering)
                </p>
                <div className="alert alert-success">{this.state.msg}</div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Subscribe;
