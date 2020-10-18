import React from "react";
import "./Header.css";
import Hero from "../Hero/Hero";

class Header extends React.Component {
  render() {
    return (
      <header className="pt-3">
        <div className="container">
          <nav className="navbar">
            <a href="index.html" className="nav-brand">
              <img src="img/Group 21.svg" alt="Ditto" />
            </a>
          </nav>
          <Hero />
        </div>
      </header>
    );
  }
}

export default Header;
