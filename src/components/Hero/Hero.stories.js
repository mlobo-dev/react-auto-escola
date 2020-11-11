import React from "react";
import Hero from "./Hero";
import SampleImage1 from "../../assets/img1.jpg";
import SampleImage2 from "../../assets/img2.jpg";

import Heading from "../Heading/Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={SampleImage1}>
    <h1>
      Ganhe sua <strong>liberdade</strong>
      <br /> para ir e vir
    </h1>

    <p>A Auto escola líder em aprovação</p>
  </Hero>
);

export const withList = () => (
  <>
    <Hero image={SampleImage2}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br /> para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit ame</li>
        <li>Lorem ipsum dolor sit ame</li>
        <li>Lorem ipsum dolor sit ame</li>
      </ul>
    </Hero>
  </>
);
