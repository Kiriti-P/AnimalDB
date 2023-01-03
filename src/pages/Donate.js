import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Donate.css";
const Donate = () => {
  return (
    <div>
      <Navbar />
      <div className="donate-top">
        <img
          alt="wildlife"
          src="https://images.wallpaperscraft.com/image/single/whale_ocean_underwater_world_130315_2560x1080.jpg"
          className="wildlife-image"
        />
        <h1 className="donate-heading">Make an Impact</h1>
        <p className="donate-reason">
          Donating to organizations that work to protect wildlife and ocean life
          can have a significant impact on the health and well-being of these
          important ecosystems. <br></br>
          <br></br>These donations can help fund research and conservation
          efforts that work to preserve and restore habitats, as well as protect
          and rehabilitate endangered species. By supporting these efforts, we
          can help ensure that these vital ecosystems remain healthy and
          thriving for future generations.{" "}
        </p>
      </div>
      <div className="donation-body">
        <div className="donate-options">
          <a
            href="https://www.nwf.org/"
            target="_blank"
            className="donate-option"
          >
            The National Wildlife Federation
          </a>
        </div>
        <div className="donate-options">
          <a
            href="https://defenders.org/"
            target="_blank"
            className="donate-option"
          >
            Defenders of Wildlife
          </a>
        </div>
        <div className="donate-options">
          <a
            href="https://theoceancleanup.com/"
            target="_blank"
            className="donate-option"
          >
            The Ocean Cleanup
          </a>
        </div>
        <div className="donate-options">
          <a
            href="https://oceanconservancy.org/"
            target="_blank"
            className="donate-option"
          >
            Ocean Conservancy
          </a>
        </div>
      </div>
      <div className="icons8-donate">
        <a href="https://icons8.com/">Logo from icons8.com</a>
      </div>
    </div>
  );
};

export default Donate;
