import styled from 'styled-components';
import { color, font, mixin } from 'Shared/utils/styles';

export const MainContainer = styled.div`
  width: 1000px;
  @media (max-width: 555px) {
    width: 90%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mixin.scrollableY};
`;

export const TextItem = styled.div`
  padding: 16px;
  color: ${color.textLight};
  font-size: ${(props) => props.fontSize}rem;
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
  // margin: 0 auto;
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
    flex-basis: 50%;
  }
`;
