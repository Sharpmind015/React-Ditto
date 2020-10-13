import React from "react";
import "./SocialLink.css";

const SocialLink = ({ details }) => {
  const socialLinks = details.map(detail => {
    let social = detail.social;
    return (
      <a href={{ social } + ".com"} key={social}>
        <img src={detail.src} alt={social} className="img-fluid px-4" />
      </a>
    );
  });
  return (
    <div className="d-flex">
      <div className="mx-auto">{socialLinks}</div>
    </div>
  );
};

export default SocialLink;
