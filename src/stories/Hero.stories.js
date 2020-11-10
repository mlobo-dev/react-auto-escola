import React from "react";
import Hero from "../components/Hero/Hero";
import SampleImage1 from "../assets/img1.jpg";
import SampleImage2 from "../assets/img2.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={SampleImage1} title="Ganhe sua liberdade para ir e vir">
    <p>A Auto escola líder em aprovação</p>
  </Hero>
);

export const withList = () => (
  <>
    <Hero image={SampleImage2} title="Ganhe sua liberdade para ir e vir">
      <ul>
        <li>Lorem ipsum dolor sit ame</li>
        <li>Lorem ipsum dolor sit ame</li>
        <li>Lorem ipsum dolor sit ame</li>
      </ul>
    </Hero>
  </>
);
