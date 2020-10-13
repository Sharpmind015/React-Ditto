import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero mt-5 pt-3 pb-4">
      <div className="row mx-auto">
        <div className="col-md-6 my-auto">
          <h1>Copy & Paste in 3D</h1>
          <p className="mt-4">
            Want to be able to clone things like household items in minutes? No,
            you don’t need to be a master wizard to do this, you’ll need a 3D
            printer though, oh and a smartphone for our revolutionary app.
          </p>
          <div className="mb-5">
            <a href="#subscribe" className="btn btn-primary py-2">
              Join the waiting List
            </a>
          </div>
        </div>
        <div className="col-md-6 ">
          <img
            src="img/Frame 4.png"
            className="img-fluid mx-auto d-block phone"
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
