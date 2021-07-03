import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import slugify from "slugify";
import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";
import SEO from "../components/SEO";

const TagsSection = styled.section`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  min-width: 20rem;
  height: 8rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--grey-700);
  color: var(--white);
  border-radius: var(--borderRadius);
  transition: var(--transition);
  &:hover {
    background: var(--primary-500);
  }
  h3 {
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
  }
`;

const Tags = ({
  data: {
    allContentfulRecipes: { nodes: recipes },
  },
}) => {
  const tagsObj = setupTags(recipes);

  return (
    <Layout>
      <SEO title="Tags" />
      <TagsSection>
        {Object.keys(tagsObj).map(tag => {
          const tagSlug = slugify(tag, { lower: true });
          return (
            <StyledLink to={`/tags/${tagSlug}`}>
              <h3>{tag}</h3>
              <p>{tagsObj[tag].length} recipe</p>
            </StyledLink>
          );
        })}
      </TagsSection>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
