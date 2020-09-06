import { sizes, color, font, mixin } from 'Shared/utils/styles';
import styled from 'styled-components';

export const NavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.navBarHeight}px;
  background: ${color.primary};
  &:hover {
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
  z-index: 100;
`;

export const Item = styled.div`
  position: relative;
  height: 100%;
  padding: 0 16px 0 16px;
  line-height: 16px;
  color: #deebff;
  transition: color 0.1s;
  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
  /* i {
    position: absolute;
    left: 18px;
  } */
`;

export const ItemText = styled.h1`
  position: relative;
  ${font.regular}
  ${font.sizeRem(1.25)}
`;
