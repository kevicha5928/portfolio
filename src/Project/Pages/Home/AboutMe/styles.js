import styled from 'styled-components';
import { color, font, mixin } from 'Shared/utils/styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;

  @media (max-width: 555px) {
    width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  @media (max-width: 555px) {
    height: 20vh;
  }
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
  height: 100%;
  color: ${color.textLight};
  ${font.regular}
  ${font.sizeRem(1.25)}
`;
