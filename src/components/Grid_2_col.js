// import React from 'react'
import styled from "styled-components";
import device from "./devices";

const Grid = styled.section`
  padding: 1rem;
  /* max-width: var(--max-width);
  margin: auto; */
  display: grid;
  gap: 2rem 4rem;
  margin-bottom: 2rem;
  /* border: 1px solid red; */
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
  }
`;

export default Grid;
