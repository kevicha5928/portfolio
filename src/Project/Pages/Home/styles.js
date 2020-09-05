import styled from 'styled-components';
import { animated } from 'react-spring';

import { color, font, mixin } from 'Shared/utils/styles';

// import { sizes } from 'Shared/utils/styles';

export const Grid = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  ${mixin.scrollableY};
`;

export const GridRow = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
  /* justify-content: flex-start; */
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${color.textLight};

  @media (min-width: 1333px) {
    flex-basis: 50%;
    width: 500px;
    height: 50%;
    justify-content: center;
  }
  @media (max-width: 555px) {
    flex-basis: 100%;
    padding: 24px 24px 48px;
    width: 350;
    /* height: 200px; */
    justify-content: flex-start;
  }
`;

export const MainText = styled.div`
  ${(props) => (props.weight === 'bold' ? font.medium : font.regular)}
  @media (min-width: 1333px) {
    ${font.size(48)}
  }
  @media (max-width: 555px) {
    ${font.size(36)}
  }
  color: ${color.textLight};
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AniText = styled(animated.div)`
  position: absolute;
  ${font.regular}
  @media (min-width: 1333px) {
    ${font.size(48)}
  }
  @media (max-width: 555px) {
    ${font.size(36)}
  }
  color: ${(props) => props.color};
`;

export const AniTextContainer = styled.div`
  position: relative;
  flex: 1;
`;
