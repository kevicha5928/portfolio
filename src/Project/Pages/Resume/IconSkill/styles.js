import styled from 'styled-components';
import { color, font, mixin } from 'Shared/utils/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: ${color.textLight};
  ${font.size(48)}
`;

export const Image = styled.img`
  border-radius: 16px;
  height: auto;
  width: ${(props) => props.width}px;
`;

export const TextItem = styled.div`
  margin-top: 8px;
  color: ${color.textLight};
  ${font.size(20)}
  ${font.regular}
`;
