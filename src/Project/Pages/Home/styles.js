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
  justify-content: center;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${color.textLight};

  flex-basis: 50%;
  max-width: 500px;
  height: 50%;
  justify-content: center;

  @media (max-width: 555px) {
    flex-basis: 100%;
    padding: 24px 24px 48px;
    width: 350px;
    /* height: 200px; */
    justify-content: flex-start;
  }
`;

export const MainText = styled.div`
  ${(props) => (props.weight === 'bold' ? font.medium : font.regular)}
  ${font.sizeRem(3)}
  color: ${color.textLight};
`;

export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AniText = styled(animated.div)`
  position: absolute;
  ${font.regular}
  ${font.sizeRem(3)}
  
  color: ${(props) => props.color};
`;

export const AniTextContainer = styled.div`
  position: relative;
  flex: 1;
`;
