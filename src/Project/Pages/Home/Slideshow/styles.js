import styled from 'styled-components';
import { animated } from 'react-spring';

// import { sizes } from 'Shared/utils/styles';

export const Image = styled.img`
  border-radius: 16px;
  height: auto;
  width: 100%;
`;

export const AniImg = styled(animated.div)`
  position: absolute;
  height: auto;
  width: 100%;
  /* padding: 16px; */
`;

export const AniContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
