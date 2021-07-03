import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/Layout";
import LinkButton from "../components/LinkButton";
import Grid from "../components/Grid_2_col";
import device from "../components/devices";
import Featured from "../components/Featured";
import SEO from "../components/SEO";

const About = () => (
  <Layout>
    <SEO title="About" />
    <Grid>
      <TextWrapper>
        <h2>Chia yuccie pour-over ethical polaroid</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          molestias.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nulla
          nihil enim, pariatur quos mollitia labore in provident quasi, minus
          cupiditate ab dignissimos cumque, beatae laborum! Placeat repudiandae
          atque asperiores.
        </p>
        <LinkButton to="/contact">Contact</LinkButton>
      </TextWrapper>
      <ImgWrapper>
        <StaticImage
          src="../assets/images/about.jpeg"
          layout="constrained"
          placeholder="tracedSVG"
          height={500}
          className="about-img"
        />
      </ImgWrapper>
    </Grid>
    <Featured />
  </Layout>
);

const TextWrapper = styled.section`
  align-self: center; // because parent is a grid
  p {
    margin-bottom: 1.5rem;
  }

  @media ${device.tablet} {
  }
`;

const ImgWrapper = styled.div`
  .about-img {
    border-radius: var(--borderRadius);
    width: 100%; // Without this the image is not occupying the full width available
    height: 500px;
    @media ${device.laptop} {
      height: 400px;
    }
  }
`;

export const query = graphql`
  {
    allContentfulRecipes(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      totalCount
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, width: 400)
        }
      }
    }
  }
`;

export default About;
