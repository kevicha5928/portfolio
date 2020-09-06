import styled from 'styled-components';
import { color, font } from 'Shared/utils/styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 700px;
  @media (max-width: 555px) {
    width: 100%;
  }
`;

export const TextItem = styled.div`
  padding: 16px;
  color: ${color.textLight};
  font-size: ${(props) => props.fontSize}rem;
  ${font.regular}
`;
