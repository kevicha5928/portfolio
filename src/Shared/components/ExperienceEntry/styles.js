import styled from 'styled-components';
import { color, font, spacing } from 'Shared/utils/styles';
import { blueGrey } from '@material-ui/core/colors';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 24px;
  background: ${blueGrey[900]};
  border-radius: 8px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: ${spacing.single(2)};
`;

export const TextItem = styled.div`
  padding: ${spacing.single(2)};
  color: ${color.textLight};
  font-size: ${(props) => props.fontSize}rem;
  ${font.regular}
`;

export const TextRow = styled.div`
  padding: ${spacing.single(1)} ${spacing.single(2)};
  width: calc(100% - ${spacing.double(2)});
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Description = styled.div`
  color: ${color.textLight};
  ${(props) => font.sizeRem(props.fontSize)}
  ${font.regular}
  display: flex;
  justify-content: flex-start;
  flex: 4;
  @media (max-width: 555px) {
    flex: 2;
  }
`;
export const Decorator = styled.div`
  color: ${color.textLight};
  ${(props) => font.sizeRem(props.fontSize)}
  ${font.regular}
  display: flex;
  justify-content: flex-end;
  flex: 2;
`;

export const ItemDetail = styled.li`
  padding: ${spacing.single(1)} ${spacing.single(2)} 0px 0px;
  color: ${color.textLight};
  ${font.sizeRem(1)}
  ${font.regular}
`;
