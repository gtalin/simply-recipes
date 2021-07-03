import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";
import device from "./devices";

const query = graphql`
  {
    allContentfulRecipes(sort: { fields: title, order: ASC }) {
      totalCount
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            width: 400
          )
        }
      }
    }
  }
`;

const RecipeNTagListWrapper = styled.section`
  display: grid;
  @media ${device.laptop} {
    grid-template-columns: 200px 1fr;
    grid-gap: 1rem;
  }
`;

const AllRecipes = () => {
  const {
    allContentfulRecipes: { nodes: recipes },
  } = useStaticQuery(query);

  return (
    <RecipeNTagListWrapper>
      {/* <h1>This is all recipes</h1> */}

      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </RecipeNTagListWrapper>
  );
};

export default AllRecipes;
