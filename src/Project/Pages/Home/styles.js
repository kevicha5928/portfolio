import styled from 'styled-components';
import { animated } from 'react-spring';

import { color, font, mixin } from 'Shared/utils/styles';

// import { sizes } from 'Shared/utils/styles';
export const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Grid = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  margin: 0 auto;
  @media (max-width: 555px) {
    height: 600px;
    /* height: 200px; */
  }
`;

export const GridRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  @media (min-width: 600px) {
    flex-flow: row wrap;

    /* height: 200px; */
  }
  @media (max-width: 555px) {
    flex-direction: column;
    /* height: 200px; */
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: ${color.textLight};
  flex-basis: 50%;
  width: 500px;
  justify-content: center;

  @media (max-width: 555px) {
    height: 50%;
    width: 80%;
    flex-basis: 100%;
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

export const AboutButton = styled.div`
  height: 500px;
  ${mixin.clickable}
  ${font.sizeRem(3)}
  ${font.regular}
  color: ${color.textLight};
`;
export const AboutMe = styled.p`
  width: 90%;
  height: 1500px;
  color: ${color.textLight};
  ${font.regular}
  ${font.sizeRem(2)}
`;
