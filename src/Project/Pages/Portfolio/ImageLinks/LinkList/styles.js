import styled from 'styled-components';
import { animated } from 'react-spring';
import { color, font, spacing } from 'Shared/utils/styles';

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
// export const LinkButton = styled.div`
// background:
// `

export const TextItem = styled.div`
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular}
`;
