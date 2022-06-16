import styled from "styled-components";

interface IFlexDivProps {
  dir?: string;
  align?: string;
  justify?: string;
  wrap?: string;
}

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props: IFlexDivProps) => props.justify || "center"};
  align-items: ${(props: IFlexDivProps) => props.align || "center"};

  @media screen and (min-width: 640px) {
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 20px;
  width: 370px;
  background-color: #f5f5f570;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 5px;
  flex-wrap: ${(props: IFlexDivProps) => props.wrap || "wrap"};
  justify-content: ${(props: IFlexDivProps) => props.justify || "center"};
  align-items: ${(props: IFlexDivProps) => props.align || "center"};

  @media screen and (min-width: 640px) {
    width: 570px;
    height: 550px;
    overflow-y: scroll;
  }

  @media screen and (min-width: 1024px) {
    width: 570px;
    height: 550px;
    overflow-y: scroll;
  }
`;

export const AnimalWrapper = styled.div`
  display: flex;
  padding: 30px;
  gap: 40px;
  width: 300px;

  flex-direction: ${(props: IFlexDivProps) => props.dir || "column"};
  justify-content: ${(props: IFlexDivProps) => props.justify || "center"};
  align-items: ${(props: IFlexDivProps) => props.align || "center"};

  @media screen and (min-width: 640px) {
    width: 200px;
    min-height: 500px;
  }

  @media screen and (min-width: 1024px) {
    width: 200px;
    min-height: 50px;
  }
`;

export const SingleAnimalWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 300px;
  flex-direction: ${(props: IFlexDivProps) => props.dir || "column"};
  justify-content: ${(props: IFlexDivProps) => props.justify || "center"};
  align-items: ${(props: IFlexDivProps) => props.align || "center"};

  @media screen and (min-width: 640px) {
    width: 500px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;
