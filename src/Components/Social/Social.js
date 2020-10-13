import React from "react";
import "./Social.css";
import SocialLink from "../SocialLink/SocialLink";

class Social extends React.Component {
  render() {
    const details = [
      {
        src: "img/Vector (3).svg",
        social: "twitter"
      },
      {
        src: "img/Vector (4).svg",
        social: "facebook"
      },
      {
        src: "img/Vector (5).svg",
        social: "instagram"
      }
    ];
    return (
      <section id="social" className="mt-5 pb-5">
        <div className="container">
          <h4 className="text-center">
            Follow us on our socials to stay updated!
          </h4>
          <SocialLink details={details} />
        </div>
      </section>
    );
  }
}
export default Social;
