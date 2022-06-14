import { Wrapper, ContentWrapper } from "./styledComponents/StyledWrappers";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h1>Oops nu klev du i kobajs!</h1>
        <Link to="/">Tillbaka</Link>
      </ContentWrapper>
    </Wrapper>
  );
};
