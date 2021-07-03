import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "normalize.css";

const GlobalStyles = createGlobalStyle`
  *,
::after,
::before {
  box-sizing: border-box;
}

:root {
  /* COLORS  */
  /* primary */
  --primary-0: #f0efff;
  --primary-50: #d8d6ff;
  --primary-100: #c1beff;
  --primary-200: #aaa5ff;
  --primary-300: #938dff;
  --primary-400: #7b74ff;
  /* main */
  --primary-500: #645cff;
  --primary-600: #554ed9;
  --primary-700: #4640b3;
  --primary-800: #37338c;
  --primary-900: #282566;
  --primary-1000: #191740;
  --primary-1100: #0a0919;
  /* grey */
  --grey-0: #fafbfc;
  --grey-50: #f2f4f8;
  --grey-100: #eaedf3;
  --grey-200: #e2e7ef;
  --grey-300: #dbe0ea;
  --grey-400: #d3dae6;
  --grey-500: #cbd3e1;
  --grey-600: #adb3bf;
  --grey-700: #8e949e;
  --grey-800: #70747c;
  --grey-900: #51545a;
  --grey-1000: #333538;
  --grey-1100: #141516;

  /* rest */
  --black: #222;
  --white: #fff;
  --red-light: #f8d7da;
  --red-dark: #842029;
  --green-light: #d1e7dd;
  --green-dark: #0f5132;
  /* box shadows */
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  /* typography */
  --defaultFontSize: 87.5%;
  --headingFont: "Inconsolata", monospace;
  --bodyFont: "Montserrat", sans-serif;
  --smallText: 0.8em;
  --extraSmallText: 0.7em;
  /* rest */
  --backgroundColor: var(--grey-0);
  --textColor: var(--grey-1000);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  /* --max-width: 1024px; */
  --fixed-width: 600px;

  --spacing-xs: 1rem;
  --spacing-sm: 2rem;
  --spacing-md: 3rem;
  --spacing-lg: 4rem;
  --spacing-xl: 5rem;

  --bp-xs: 320px;
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1200px;

}
html {
  font-size: var(--defaultFontSize);
  
}
body {
  background: var(--backgroundColor);
  color: var(--textColor);
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.75;
}
h1,h2,h3,h4,h5,h6 {
  font-family: var(--headingFont);
  /* text-align: center; */
  font-weight: 400;
  line-height: 1;
  letter-spacing: var(---letterSpacing);
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
}
a {
  text-decoration: none;
  color: var(--primary-500);
  text-transform: capitalize;
}
ul {
  list-style: none;
  padding: 0;
}

`;

const Main = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem;
  min-height: calc(100vh - (6rem + 4rem));
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navbar />
    <Main>{children}</Main>

    <Footer />
  </>
);

export default Layout;
