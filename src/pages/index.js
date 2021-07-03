import React from "react";
import Layout from "../components/Layout";
import HeroImage from "../components/HeroImage";
import FetchData from "../examples/fetchData";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <Layout>
      {/* <h1>Hello world!</h1> */}
      <SEO title="Home" />
      <HeroImage />
      {/* <FetchData /> */}
      <AllRecipes />
    </Layout>
  );
}
