import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const HeroImage = () => (
  <HeroWrapper>
    <StaticImage
      layout="constrained"
      height={300}
      placeholder="tracedSVG"
      src="../assets/images/main.jpeg"
      className="hero-img"
    />

    <TextWrapper>
      <h1>
        simply recipes
        <span> no fluff, just recipes</span>
      </h1>
    </TextWrapper>
  </HeroWrapper>
);

const HeroWrapper = styled.div`
  position: relative;
  /* max-width: var(--max-width);
  margin: auto; */
  margin-bottom: var(--spacing-lg);
  .hero-img {
    width: 100%;
    border-radius: var(--borderRadius);
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--borderRadius);
  /* opacity: 20%; */
  h1 {
    color: var(--white);
    text-transform: capitalize;
    text-align: center;
    span {
      margin-top: 1rem;
      font-size: 2rem;
      display: block;
    }
  }
`;

export default HeroImage;
