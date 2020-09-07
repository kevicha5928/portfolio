import styled from 'styled-components';
import { color, font } from 'Shared/utils/styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 900px;
  @media (max-width: 555px) {
    width: 90%;
  }
  padding: 16px 0px 64px;
`;

export const TextItem = styled.div`
  padding: 16px;
  color: ${color.textLight};
  ${(props) => font.sizeRem(props.fontSize)}
  ${font.regular}
`;

export const Image = styled.img`
  border-radius: 16px;
  height: auto;
  /* max-height: 100px; */
  max-width: 100px;
`;

export const Grid = styled.div`
  max-width: 600px;
  @media (max-width: 555px) {
    width: 100%;
  }
  padding-bottom: 32px;
`;
export const GridRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const GridItem = styled.div`
  flex-basis: 25%;
  -ms-flex: auto;
  padding: 8px 8px 0px;
  position: relative;
  box-sizing: border-box;
  color: ${color.textLight};
  display: flex;
  justify-content: center;
  @media (max-width: 555px) {
    flex-basis: 33.33%;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 65%;
  padding-bottom: 32px;
  /* padding-left: 8px; */
  @media (max-width: 555px) {
    width: 100%;
  }
`;
