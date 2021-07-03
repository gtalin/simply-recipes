import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: var(--black);
  color: var(--white);
  padding: 1rem;
  text-align: center;
  span,
  a {
    color: var(--primary-500);
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>
      &copy; {new Date().getFullYear()} <span>SimpyRecipes.</span> Built with{" "}
      <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </p>
  </FooterWrapper>
);

export default Footer;
