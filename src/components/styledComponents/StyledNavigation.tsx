import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-family: "Potta One", cursive;
  font-size: 40pt;
  text-decoration: none;
  color: whitesmoke;
  padding: 0px;
  padding-bottom: 15px;
`;

export const StyledAlink = styled(StyledLink)`
  font-size: 9pt;
  padding-bottom: 5px;
  color: #403c3c;
  &:hover {
    text-decoration: underline;
  }
`;
