import styled from 'styled-components';
import { color, font, mixin } from 'Shared/utils/styles';

export const TextItem = styled.div`
  color: ${color.textLight};
  ${font.size(48)}
`;

export const Image = styled.img`
  border-radius: 16px;
  height: auto;
  /* max-height: 100px; */
  max-width: 100px;
`;
