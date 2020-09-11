import styled from 'styled-components';

import { spacing } from 'Shared/utils/styles';

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
