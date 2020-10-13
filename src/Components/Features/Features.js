import React from "react";
import "./Features.css";
import FeatureDesc from "../FeatureDesc/FeatureDesc";

class Features extends React.Component {
  render() {
    const featuresDetails = [
      {
        src: "img/Vector.svg",
        desc: "Scan",
        text: "Scan and record app dimension using our app's AR technology"
      },
      {
        src: "img/Vector (1).svg",
        desc: "Send",
        text:
          " Send results to your 3D printer (no, there's zero need to know design')"
      },
      {
        src: "img/Vector (1).svg",
        desc: "Print",
        text: "Immediately start printing and get your 3D printed item"
      }
    ];
    return (
      <section id="features" className="mt-5">
        <div className="container">
          <h3 className="h2">How it works</h3>
          <p className="mb-4">
            To prove that there's no sorcery involved, we'll show you how it
            works in 3 easy steps:
          </p>
          <FeatureDesc details={featuresDetails} />
        </div>
      </section>
    );
  }
}

export default Features;
