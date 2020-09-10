import styled from 'styled-components';
import { color, font, mixin, spacing } from 'Shared/utils/styles';

export const LinksContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: auto;
`;

export const LonkButton = styled.a`
  position: relative;
  z-index: auto;
  margin: 0px ${spacing.single(1)};
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular};
  background: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  border-radius: ${spacing.single(0.5)};
  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

export const Text = styled.div`
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular};
  color: ${color.textLight};
  padding: ${spacing.single(2)};
  ${LonkButton}:hover & {
    color: ${color.textDark};
  }
`;
