import styled from 'styled-components';
import { color, font } from 'Shared/utils/styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 555px) {
    width: 100%;
  }
`;
