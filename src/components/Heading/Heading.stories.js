import React from "react";
import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading,
};

export const usage = () => (
  <div>
    <Heading>
      <h1>Título h1</h1>
    </Heading>
    <Heading>
      <h2>Título h2</h2>
    </Heading>
    <Heading>
      <h3>Título h3</h3>
    </Heading>
    <Heading>
      <h4>Título h4</h4>
    </Heading>
    <Heading>
      <h5>Título h5</h5>
    </Heading>
    <Heading>
      <h6>Título h6</h6>
    </Heading>
  </div>
);
