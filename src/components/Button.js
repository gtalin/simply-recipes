import styled from "styled-components";

const Button = styled.button`
  border: 2px solid var(--primary-300);
  color: var(--white);
  background: var(--primary-300);
  cursor: pointer;
  text-decoration: none;
  letter-spacing: var(--letter-spacing);
  padding: 0.5rem 0.75rem;
  border-radius: var(--borderRadius);
  width: 100%;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  transition: var(--transition);
  &:hover {
    border: 2px solid transparent;
    background: var(--primary-400);
  }
`;

export default Button;
