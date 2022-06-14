import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-size: 30pt;
  text-decoration: none;
  color: whitesmoke;
  padding: 0px;
  font-family: "century gothic";
  padding-bottom: 20px;
`;
