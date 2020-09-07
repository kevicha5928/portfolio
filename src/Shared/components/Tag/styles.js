import styled from 'styled-components';
import { color, font } from 'Shared/utils/styles';
import { blueGrey } from '@material-ui/core/colors';

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  background: ${blueGrey[800]};
  border-radius: 8px;
  margin: 4px 8px 4px 0px;
  /* @media (max-width: 555px) {
    width: 100%;
  } */
`;

export const TextItem = styled.div`
  padding: 8px;
  color: ${color.textLight};
  ${(props) => font.sizeRem(props.fontSize)}
  ${font.regular}
`;

export const LogoBit = styled.img`
  padding: 0px 2px 0px 8px;
  width: 16px;
`;
