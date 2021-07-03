import React from "react";
// import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteTitle
        siteDescription
      }
    }
  }
`;

const SEO = ({ title, description, image, article }) => {
  const { site } = useStaticQuery(query);
  console.log(site);
  // console.log("Title is: ", title, " site metadata is: ", site);
  const { siteTitle, siteDescription } = site.siteMetadata;

  const metaDescription = description || siteDescription;
  // const seo = {
  //   title: title || defaultTitle,
  //   description: description || defaultDescription,
  //   image: `${siteUrl}${image || defaultImage}`,
  //   url: `${siteUrl}${pathname}`,
  // };
  console.log("SEO componet");
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}
      meta={[{ name: "description", content: metaDescription }]}
    />
  );
};

export default SEO;

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   // image: PropTypes.string,
//   // article: PropTypes.bool,
// };
// SEO.defaultProps = {
//   title: null,
//   description: null,
//   // image: null,
//   // article: false,
// };
