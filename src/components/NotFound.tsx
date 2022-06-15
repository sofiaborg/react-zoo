import { Wrapper, ContentWrapper } from "./styledComponents/StyledWrappers";
import { Link } from "react-router-dom";
import { StyledH1 } from "./styledComponents/StyledText";

export const NotFound = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <StyledH1>Oops nu klev du i kobajs!</StyledH1>
      </ContentWrapper>
    </Wrapper>
  );
};
