import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import slugify from "slugify";
import setupTags from "../utils/setupTags";

const StyledLink = styled(Link)`
  color: var(--grey-700);
  font-size: 1.1rem;
  letter-spacing: var(--letterSpacing);
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const TagsList = ({ recipes }) => {
  const tagsObj = setupTags(recipes);
  console.log(tagsObj);
  return (
    <div>
      <h3>Recipes</h3>
      <ul>
        {Object.keys(tagsObj).map(tag => {
          const tagSlug = slugify(tag, { lower: true });
          return (
            <li>
              <StyledLink to={`/tags/${tagSlug}`}>
                {`${tag} (${tagsObj[tag].length})`}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagsList;
