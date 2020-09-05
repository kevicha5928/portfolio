import styled from 'styled-components';
import { animated } from 'react-spring';
import { color, mixin } from 'Shared/utils/styles';

// import { sizes } from 'Shared/utils/styles';

export const AniContainer = styled.div`
  position: relative;
  ${mixin.scrollableY};
  background: ${color.backgroundDarkPrimary};
  width: 100%;
  height: 100%;
`;

export const Animated = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
