import styled from 'styled-components';
import { color, font } from 'Shared/utils/styles';

export const TextItem = styled.div`
  padding: 16px;
  color: ${color.textLight};
  font-size: ${(props) => props.fontSize}rem;
  ${font.regular}
`;

export const TextRow = styled.div`
  padding-left: ${(props) => (props.indent ? props.indent * 90 : 0)}px;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Description = styled.div`
  padding: 4px;
  color: ${color.textLight};
  ${font.sizeRem(1)}
  ${font.regular}
  display: flex;
  justify-content: flex-start;
  flex: 4;
  @media (max-width: 555px) {
    flex: 2;
  }
`;
export const Decorator = styled.div`
  padding: 4px;
  color: ${color.textLight};
  ${font.sizeRem(1)}
  ${font.regular}
  display: flex;
  justify-content: flex-end;
  flex: 2;
`;

export const ItemDetail = styled.li`
  padding: 8px 0px;
  color: ${color.textLight};
  ${font.sizeRem(1)}
  ${font.regular}
`;
