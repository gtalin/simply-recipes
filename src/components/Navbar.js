import React, { useState } from "react";
import { Link } from "gatsby";
import { FiAlignJustify } from "react-icons/fi";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import logo from "../assets/images/logo.svg";
import device from "./devices";

const StyledIcon = styled(FiAlignJustify)`
  background: var(--primary-400);
  color: var(--white);
  font-size: 2.5rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  border-radius: var(--borderRadius);
  transition: var(--transition);
  position: relative;
  z-index: 4;

  &:hover {
    background: var(--primary-500);
  }
  @media ${device.laptop} {
    display: none;
  }
`;

const LogoImg = styled.img`
  /* max-width: 10rem; */
  /* max-width: 12rem; */
  height: 2.5rem;
  align-self: flex-start;
  /* height: 50%; */
  margin-right: 2rem;
  align-self: center;
`;

const Nav = styled.nav`
  /* border: 1px solid gold; */
  padding: 1rem;
  margin-bottom: 1rem;
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* align-items: flex-start; */
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`;
// const NavMenu = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-30rem)")};
  height: ${({ open }) => (open ? "22rem" : "0")};

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /* align-items: center;
    align-items: flex-end; */
    /* justify-content: space-around; */
    /* flex-flow: column nowrap; */
    transform: translateY(0);
    height: auto;
    width: 100%;

    padding: 0;
    margin: 0;
  }
`;

const NavItem = styled.li`
  display: block;
  text-align: center;
  padding-top: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  border-top: 1px solid var(--grey-500);
  transition: var(--transition);
  position: relative;
  z-index: -1;
  @media ${device.laptop} {
    width: auto;
    /* display: inline-flex; */
    display: inline-block;
    padding: 0;
    margin: 0;
    border-top: none;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
    &:last-of-type {
      margin-left: auto;
    }
  }
`;
const StyledLink = styled(Link)`
  text-transform: capitalize;
  /* font-size: 1.5rem; */
  color: var(--grey-800);
  letter-spacing: var(--letterSpacing);
  color: var(--grey-1000);
  text-transform: capitalize;
  align-items: center;
  &.active {
    color: var(--primary-500);
  }
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  margin: 0;
`;

const LargerLinkButton = styled(LinkButton)`
  font-size: 1.5rem;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavHeader>
        <Link to="/">
          {/* <img src="../assets/logo.svg" alt="Logo" /> */}
          <LogoImg src={logo} alt="simply recipes" />
        </Link>
        <StyledIcon
          onClick={() => {
            console.log("Icon is clicked");
            setOpen(!open);
          }}
        />
      </NavHeader>

      <NavLinks open={open}>
        <NavItem>
          <StyledLink to="/" activeClassName="active">
            Home
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/recipes" activeClassName="active">
            Recipes
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/tags" activeClassName="active">
            tags
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about" activeClassName="active">
            About
          </StyledLink>
        </NavItem>
        <NavItem>
          <LinkButton to="/contact">Contact</LinkButton>
        </NavItem>

        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavLinks>
    </Nav>
    // <nav>
    //   <StyledIcon />
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>

    //     <li>
    //       <Link to="/recipes">Recipes</Link>
    //     </li>
    //     <li>
    //       <Link to="/tags">tags</Link>
    //     </li>
    //     <LinkButton to="/contact">Contact</LinkButton>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
