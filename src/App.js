import React from "react";
import "./vendor/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import Subscribe from "./Components/Subscribe/Subscribe";
import Countdown from "./Components/Countdown/Countdown";
import Social from "./Components/Social/Social";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#EF3C55"
            fillOpacity="1"
            d="M0,32L48,26.7C96,21,192,11,288,53.3C384,96,480,192,576,240C672,288,768,288,864,250.7C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
        <main>
          <Features />
          <Subscribe />
          <Countdown />
          <Social />
        </main>
      </div>
    );
  }
}

export default App;
