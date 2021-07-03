import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import slugify from "slugify";
import Layout from "../components/Layout";
import device from "../components/devices";
import SEO from "../components/SEO";

const Article = styled.article`
  @media ${device.tablet} {
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem 2rem; */
  }
`;
const Content = styled.section`
  @media ${device.tabletL} {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 1rem 2rem;
    align-items: center;
  }
`;
const Details = styled.section`
  @media ${device.tabletL} {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 1rem 4rem;
    /* align-items: center; */
  }
`;
const HeroImage = styled(GatsbyImage)`
  border-radius: var(--borderRadius);
  max-height: 400px;
  @media ${device.tabletL} {
    max-width: 500px;
  }
`;
const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SubHeading = styled.h4`
  font-size: 2rem;
`;
const Icon = styled.div`
  line-height: 1;
  text-align: center;
  svg {
    font-size: 2rem;
  }
  p {
    text-transform: capitalize;
    &:last-of-type {
      color: var(--grey-700);
    }
  }
`;
const Tags = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 0.5rem;
  }
`;
const StyledLink = styled(Link)`
  background: var(--primary-500);
  color: var(--white);
  padding: 0.25rem 0.75rem;
  border-radius: var(--borderRadius);
  cursor: pointer;
  transition: var(--transition);
  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
  &:hover {
    background: var(--primary-700);
  }
`;

const Instructions = styled.section`
  ul {
    li {
      border: none;
    }
    h5 {
      text-transform: uppercase;
      color: var(--primary-500);
      display: flex;
      align-items: center;
    }
    span {
      margin-right: 1rem;
      &:last-of-type {
        display: block;
        flex: 1;
        height: 2px;
        border: 1px solid var(--grey-500);
        background: var(--grey-500);
      }
    }
  }
  p {
    letter-spacing: normal;
  }
`;
const Ingredients = styled.section`
  ul {
    /* color: var(--grey-900); */
  }
`;
const Tools = styled.section`
  ul {
    color: var(--primary-500);
  }
`;
const StyledList = styled.ul`
  li {
    /* color: var(--primary-500); */
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--grey-500);
    letter-spacing: var(--letterSpacing);
  }
`;

const RecipeTemplate = ({ data: { contentfulRecipes: recipe } }) => {
  console.log(recipe.content);
  const image = getImage(recipe.image);
  return (
    <Layout>
      <SEO title={recipe.title} description={recipe.description.description} />
      <Article>
        <Content>
          <HeroImage image={image} alt={recipe.title} />

          <section>
            <h1>{recipe.title}</h1>
            <Description>{recipe.description.description}</Description>
            <Icons>
              <Icon>
                <BsClock />
                <p>prep Time</p>
                <p>{recipe.prepTime} min</p>
              </Icon>
              <Icon>
                <BsClockHistory />
                <p>cook Time</p>
                <p>{recipe.cookTime} min</p>
              </Icon>

              <Icon>
                <BsPeople />
                <p>Serving</p>
                <p>{recipe.servings} min</p>
              </Icon>
            </Icons>
            <Tags>
              <p>Tags</p>
              {recipe.content.tags.map(tag => {
                console.log(tag);
                const tagSlug = slugify(tag, { lower: true });
                return <StyledLink to={`/tags/${tagSlug}`}>{tag}</StyledLink>;
              })}
            </Tags>
          </section>
        </Content>
        <Details>
          <Instructions>
            <SubHeading>Instructions</SubHeading>
            <StyledList>
              {recipe.content.instructions.map((instruction, index) => (
                <li>
                  <h5>
                    <span>step {index + 1}</span>
                    <span />
                  </h5>
                  <p>{instruction}</p>
                </li>
              ))}
            </StyledList>
          </Instructions>
          <section>
            <Ingredients>
              <SubHeading>Ingredients</SubHeading>
              <StyledList>
                {recipe.content.ingredients.map(ingredient => (
                  <li>{ingredient}</li>
                ))}
              </StyledList>
            </Ingredients>
            <Tools>
              <SubHeading>Tools</SubHeading>
              <StyledList>
                {recipe.content.tools.map(tool => (
                  <li>{tool}</li>
                ))}
              </StyledList>
            </Tools>
          </section>
        </Details>
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query singleRecipe($title: String) {
    contentfulRecipes(title: { eq: $title }) {
      cookTime
      prepTime
      servings
      description {
        description
      }
      title
      content {
        tags
        instructions
        ingredients
        tools
      }
      image {
        gatsbyImageData(
          placeholder: TRACED_SVG
          layout: CONSTRAINED
          # width: 600
          height: 400
        )
      }
    }
  }
`;

export default RecipeTemplate;
