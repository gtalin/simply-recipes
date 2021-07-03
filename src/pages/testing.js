import React from "react";
import { graphql } from "gatsby";

const Testing = ({
  data: {
    allFile: { nodes },
  },
}) => (
  <div>
    {nodes.map(item => (
      <div>
        <h3>Name: {item.name}</h3>
        <p>Size: {item.size}</p>
        <p>Absolute Path: {item.absolutePath}</p>
      </div>
    ))}
  </div>
);
export const data = graphql`
  query MyQuery {
    allFile {
      totalCount
      nodes {
        absolutePath
        name
        size
      }
    }
  }
`;

export default Testing;
