import styled from 'styled-components';
import { color, font } from 'Shared/utils/styles';

export const Grid = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
export const GridRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const GridItem = styled.div`
  height: 450px;
  flex-basis: 20%;
  -ms-flex: auto;
  width: 300px;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  color: ${color.textLight};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1333px) {
    flex-basis: 33.33%;
  }
  /* @media (max-width: 1073px) {
    flex-basis: 33.33%;
  } */

  @media (max-width: 555px) {
    flex-basis: 50%;
  }
`;

export const TextItem = styled.div`
  ${font.sizeRem(1)}
`;

export const Image = styled.img`
  border-radius: 16px;
  height: auto;
  width: auto;
  max-width: 100%;
`;
