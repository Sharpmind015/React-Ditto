import React from "react";
import "./FeatureDesc.css";

const FeatureDesc = ({ details }) => {
  const row = details.map(detail => {
    return (
      <div className="col-md-4 text-center  " key={detail.desc}>
        <img src={detail.src} alt={detail.desc} />
        <h5 className="mt-3">{detail.desc}</h5>
        <p className="mt-2">{detail.text}</p>
      </div>
    );
  });
  return <div className="row">{row}</div>;
};

export default FeatureDesc;
