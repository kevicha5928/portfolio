import styled from 'styled-components';
import { color, font, mixin, spacing } from 'Shared/utils/styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 555px) {
    width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.div`
  ${mixin.clickable}
  ${font.sizeRem(3)}
  ${font.regular}
  color: ${color.textLight};
`;
export const Description = styled.p`
  width: 100%;
  /* height: 100%; */
  color: ${color.textLight};
  ${(props) => (props.bold ? font.bold : font.regular)}

  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1.25)}
  margin: ${spacing.single(2)};
`;

export const TextItem = styled.div`
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular}
  padding-bottom: ${spacing.single(1)};
`;
