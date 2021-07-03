import { Link } from "gatsby";
import styled from "styled-components";

const LinkButton = styled(Link)`
  border: 2px solid var(--primary-300);
  color: var(--white);
  background: var(--primary-300);
  cursor: pointer;
  text-decoration: none;
  letter-spacing: var(--letter-spacing);
  padding: 0.5rem 0.75rem;
  border-radius: var(--borderRadius);
  &:hover {
    border: 2px solid transparent;
    background: var(--primary-400);
  }
`;

// const Button = () => {
//   return (
//     <div>

//     </div>
//   )
// }

export default LinkButton;
