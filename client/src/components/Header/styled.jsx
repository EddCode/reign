import styled from "styled-components";

const Header = styled.header`
  padding: 3rem 2rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;

export const H1 = styled.h1`
  font-size: 4em;
  margin-bottom: 0.7rem;
`;

export const H3 = styled.h3`
  font-size: 1.4em;
`;

export default Header;
