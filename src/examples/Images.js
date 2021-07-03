import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
// import big from "../assets/images/big.jpg";
// import "../assets/css/main.css";

const Images = () => (
  <Wrapper>
    <article>
      <h4>Constrained / default</h4>
      <StaticImage
        src="../assets/images/recipe-1.jpeg"
        alt="food"
        placeholder="tracedSVG"
        layout="constrained"
        as="section"
        className="example-img"
        height={900}
        // width={500}
      />
    </article>

    <article>
      <h4>Fixed</h4>
      <StaticImage
        src="../assets/images/recipe-1.jpeg"
        alt="food"
        placeholder="blurred"
        layout="fixed"
        // as="section"
        className="example-img"
        width={300}
        // height={300}
        // objectFit="none"
        // objectPosition="-50px 50px"
      />
    </article>

    <article>
      <h4>Full width</h4>
      <StaticImage
        src="../assets/images/recipe-1.jpeg"
        alt="food"
        placeholder="dominantColor"
        layout="fullWidth"
        as="section"
        className="example-img"
      />
    </article>

    <h2>Gatsby Image</h2>
  </Wrapper>
);

const Wrapper = styled.section`
  /* width: 70vw; */
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {
    border: 2px solid gold;
  }
  .example-img {
    border-radius: 1rem;
    /* height: 200px; */
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Images;
