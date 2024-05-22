import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>The only thing we're series about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            doloribus non suscipit accusantium quos! Asperiores hic amet, ex
            eius nesciunt ipsa fugiat aperiam dolore optio voluptates at officia
            omnis consequuntur fugit porro! Reiciendis, esse voluptas? Provident
            alias officia quod, iusto eos earum at tempore. Hic temporibus
            similique rem quam quae.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
