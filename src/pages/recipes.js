import React from "react";
import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Recipes = () => (
  <Layout>
    <SEO title="Recipes" />
    <AllRecipes />
  </Layout>
);

export default Recipes;
