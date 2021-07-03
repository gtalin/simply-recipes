import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import RecipeList from "../components/RecipesList";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const StyleledHeading = styled.h2`
  text-transform: capitalize;
  margin-bottom: var(--spacing-lg);
`;
const TagTemplate = ({ data, pageContext }) => {
  console.log(data);
  const recipes = data.allContentfulRecipes.nodes;
  return (
    <Layout>
      <SEO
        title={
          pageContext.tag.charAt(0).toUpperCase() + pageContext.tag.slice(1)
        }
      />
      <StyleledHeading>{pageContext.tag}</StyleledHeading>

      <RecipeList recipes={recipes} />
    </Layout>
  );
};

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipes(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
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

export default TagTemplate;
