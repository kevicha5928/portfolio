import styled from 'styled-components';
import { animated } from 'react-spring';

import { font } from 'Shared/utils/styles';

// import { sizes } from 'Shared/utils/styles';

export const SlideshowContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const MainText = styled.div`
  ${(props) => (props.weight === 'bold' ? font.medium : font.regular)}
  ${font.size(48)}
`;

export const Image = styled.img`
  border-radius: 16px;
  height: auto;
  width: auto;
  max-width: 100%;
`;

export const AniImg = styled(animated.div)`
  position: absolute;
  ${font.regular}
  ${font.size(48)}
`;

export const AniContainer = styled.div`
  position: relative;
  height: 461px;
`;
