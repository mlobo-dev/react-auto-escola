import React from "react";
import styled, { css } from "styled-components";
import { breakAt, BreakpointSize } from "../Breakpoints";
const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;
  background-color: red;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 60px;
  }

  ${breakAt(BreakpointSize.lg)} {
    width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  p,
  li {
    font-size: 18px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
  }
`;
const Hero = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
);

export default Hero;
