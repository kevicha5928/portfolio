import styled from 'styled-components';
import { animated } from 'react-spring';
import { color, font, spacing } from 'Shared/utils/styles';

export const Animated = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LinksContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
// export const LinkButton = styled.div`
// background:
// `
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0px 10%;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 60%;
  width: 100%;
  overflow: hidden;
  &:hover ${Image} {
    filter: blur(0.5rem);
  }
`;

export const TextItem = styled.div`
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular}
`;
