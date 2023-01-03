import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <div className="top-about">
        <img
          alt="animal-poster"
          src="https://wallpaperaccess.com/full/1862824.png"
          className="animal-about-image"
        />
        <h1 className="about">About Us</h1>
        <h2 className="about-sub">
          FOR THE FUTURE OF OUR <span className="bolded">NEIGHBORS</span>{" "}
        </h2>
      </div>
      <div className="body-about">
        <h4 className="vision">Vision</h4>
        <p className="vision-body">
          Our vision is to create a world where animals are valued as vital and
          integral members of the global community. We believe that animals have
          the right to live their lives free from suffering and exploitation,
          and that they play a critical role in maintaining the balance of
          ecosystems and the health of our planet. <br></br>
          <br></br>We envision a future where humans and animals coexist in
          harmony, and where the well-being of all living beings is prioritized.
          By protecting and respecting animals, we can create a more
          compassionate and sustainable world for all.
        </p>
        <Link className="donate-button" to="/Donate">
          DONATE
        </Link>
      </div>
      <div className="icons8">
        <a href="https://icons8.com/">Logo from icons8.com</a>
      </div>
    </div>
  );
}

export default About;
