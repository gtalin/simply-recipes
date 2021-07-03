import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import slugify from "slugify";

const StyledImage = styled(GatsbyImage)`
  /* border: 5px solid gold; */
  border-radius: var(--borderRadius);
  height: 15rem;
`;

const StyledLink = styled(Link)`
  display: block;
  /* margin-bottom: var(--spacing-md); */
  h3 {
    color: var(--textColor);
    line-height: 1;
    margin-bottom: var(--spacing-xs);
    font-weight: 600;
  }
  p {
    color: var(--grey-800);
  }
`;

const Recipes = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem 1rem;
  padding-bottom: 3rem;
  /* margin: auto; */
  justify-items: left;
  text-align: left;
`;

const RecipesList = ({ recipes = [] }) => (
  <Recipes>
    {recipes.map(recipe => {
      const image = getImage(recipe.image);
      const slug = slugify(recipe.title, { lower: true });
      return (
        <StyledLink to={`/${slug}`} key={recipe.id}>
          <StyledImage image={image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>
            Prep: {recipe.prepTime} min | Cook: {recipe.cookTime} min
          </p>
        </StyledLink>
      );
    })}
  </Recipes>
);

export default RecipesList;
