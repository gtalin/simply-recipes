import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        author
        description
        simpleFata
        title
        person {
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: { info },
  } = useStaticQuery(getData);
  return (
    <div>
      <h1>Hello from Fetchdata</h1>
      <p>{info.title}</p>
      <p>{info.author}</p>
      <p>{info.person.name}</p>
      <p>{JSON.stringify(info.complexData)}</p>
      <ul>
        {info.complexData.map(item => (
          <li>
            Name: {item.name}; Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
