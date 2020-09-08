import styled from 'styled-components';
import { sizes, color, font, mixin, spacing } from 'Shared/utils/styles';

export const NavBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* height: 5vh; */
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.navBarHeight}px;
  background: ${color.primary};
  z-index: 100;
`;

export const Item = styled.div`
  position: relative;
  height: 100%;
  padding: 0 ${spacing.single(1)} 0 ${spacing.single(1)};
  /* line-height: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #deebff;
  transition: color 0.1s;
  ${mixin.clickable}
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ItemText = styled.h1`
  position: relative;
  ${font.regular}
  ${font.sizeRem(1.25)}
`;
