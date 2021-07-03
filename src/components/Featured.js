import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import RecipesList from "./RecipesList";

const FeaturedSection = styled.section`
  text-align: center;
  h4 {
    font-size: 1.75rem;
  }
`;

const query = graphql`
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

const Featured = () => {
  // const data = useStaticQuery(query);
  // const recipes = data.allContentfulRecipes.nodes;
  const {
    allContentfulRecipes: { nodes: recipes },
  } = useStaticQuery(query);

  return (
    <FeaturedSection>
      <h4>Look at this Awesomesauce!</h4>
      <RecipesList recipes={recipes} />
    </FeaturedSection>
  );
};

export default Featured;
