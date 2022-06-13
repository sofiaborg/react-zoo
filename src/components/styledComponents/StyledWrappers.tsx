import styled from "styled-components";

export const BGWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 640px) {
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  width: 370px;
  padding: 10px;
  @media screen and (min-width: 640px) {
    width: 570px;
    height: 550px;
  }

  @media screen and (min-width: 1024px) {
    width: 570px;
    height: 550px;
  }
`;

export const AnimalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  gap: 30px;
  width: 300px;

  @media screen and (min-width: 650px) {
    width: 600px;
    height: 500px;
    overflow-y: scroll;
  }
  @media screen and (min-width: 1024px) {
    width: 700px;
    height: 500px;
    overflow-y: scroll;
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;
  @media screen and (min-width: 650px) {
    width: 250px;
  }
  @media screen and (min-width: 1024px) {
    width: 250px;
  }
`;

export const InfoWrapper = styled.p`
  width: 300px;
  font-size: 10pt;
  @media screen and (min-width: 650px) {
    width: 250px;
  }
  @media screen and (min-width: 1024px) {
    width: 250px;
  }
`;

export const NavigationWrapper = styled.div`
  width: 100%;
`;

export const FooterWrapper = styled.div`
  width: 100%;
`;
