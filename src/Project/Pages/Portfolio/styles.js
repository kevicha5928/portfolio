import styled from 'styled-components';

import { color, font, spacing } from 'Shared/utils/styles';

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const GridRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: ${spacing.single(6)};
  @media (max-width: 555px) {
    padding: ${spacing.single(2)};
  }
`;

export const GridItem = styled.div`
  height: 450px;
  flex-basis: 50%;
  -ms-flex: auto;
  position: relative;
  /* padding: 10px; */
  padding-bottom: ${spacing.single(6)};
  box-sizing: border-box;
  color: ${color.textLight};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 555px) {
    flex-basis: 100%;
  }
`;

export const Card = styled.div`
  border-radius: 8px;
  height: 100%;
  width: 80%;
  @media (max-width: 555px) {
    width: 100%;
  }
  background: ${color.backgroundMedium};
  overflow: hidden;
`;

export const TextItem = styled.div`
  ${(props) => font.sizeRem(props.fontSize ? props.fontSize : 1)}
  ${font.regular}
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 60%;
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0px 10%;
  &:hover {
    filter: blur(1rem);
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: ${spacing.single(2)};
`;
