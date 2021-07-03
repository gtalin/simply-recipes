import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Grid from "../components/Grid_2_col";
import Featured from "../components/Featured";
import SEO from "../components/SEO";

// const Grid = styled.section`
//   padding: 1rem;
//   max-width: var(--max-width);
//   margin: auto;
//   display: flex;
//   /* justify-content: center; */
//   align-items: center;
//   /* display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   align-items: start;
//   grid-gap: 1rem;*/
//   border: 1px solid red;
// `;

const ArticleWrapper = styled.article`
  max-width: 60ch;
  align-self: center;
  h2 {
    text-align: left;
    font-size: 2.5rem;
    font-weight: 400;
  }
`;

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Grid>
      <ArticleWrapper>
        <h2>Want to get in touch?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
          inventore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus aperiam repellat quidem! Tempore facilis at quibusdam
          reiciendis rem totam quae?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officia
          dolorum nulla facilis illum veritatis deleniti nemo?
        </p>
      </ArticleWrapper>
      <Form />
    </Grid>
    <Featured />
  </Layout>
);

export default Contact;
