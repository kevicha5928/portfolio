import styled from 'styled-components';
import { animated } from 'react-spring';

import { font } from 'Shared/utils/styles';

export const DividerContainer = styled.div`
  width: 90%;
`;

export const Animated = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 2.5;
  width: 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
  object-position: 0px 10%;
  ${ImageContainer}:hover & {
    background: linear-gradient(rgba(0, 0, 0, 0.7));
    filter: blur(0.5rem);
  }
`;

export const TextItem = styled.div`
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular}
`;
