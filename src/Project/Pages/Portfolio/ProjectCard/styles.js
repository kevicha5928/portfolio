import styled from 'styled-components';
import { animated } from 'react-spring';

import { color, font, spacing, mixin } from 'Shared/utils/styles';

export const GridItem = styled.div`
  height: 500px;
  flex-basis: 50%;
  -ms-flex: auto;
  position: relative;
  /* padding: 10px; */
  padding-bottom: 50px;
  box-sizing: border-box;
  color: ${color.textLight};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 555px) {
    flex-basis: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 100%;
  width: 80%;
  @media (max-width: 555px) {
    width: 100%;
  }
  background: ${color.cardColor};
  overflow: hidden;
`;

export const TextItem = styled.div`
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular}
  padding-bottom: ${spacing.single(1)};
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 60%;
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0px 10%;
  &:hover {
    filter: blur(1rem);
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const DetailContainer = styled.div`
  position: relative;
  flex: 1;
  ${mixin.scrollableY};
`;

export const TextContainer = styled.div`
  padding: ${spacing.single(2)};

  height: 150px;
`;

export const SkillsContainer = styled.div`
  padding: ${spacing.single(2)};

  height: 150px;
`;

export const Animated = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
