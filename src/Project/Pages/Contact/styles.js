import styled from 'styled-components';
import { color, font, mixin, spacing } from 'Shared/utils/styles';
import { Email, GitHub, LinkedIn } from '@material-ui/icons';
// import { sizes } from 'Shared/utils/styles';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  @media (max-width: 555px) {
    width: 90%;
  }
  padding: 16px 0px 64px;
`;

export const TextItem = styled.div`
  padding: 16px;
  color: ${color.textLight};
  ${(props) => font.sizeRem(props.fontSize)}
  ${font.regular}
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background: ${color.buttonColor}; */
  padding: 0px ${spacing.single(1)};
  /* border-radius: 8px; */
  margin: ${spacing.single(4)};
`;

export const EmailIcon = styled(Email)`
  color: ${color.textLight};
`;
export const GitHubIcon = styled(GitHub)`
  color: ${color.textLight};
`;
export const LinkedInIcon = styled(LinkedIn)`
  color: ${color.textLight};
`;

export const Button = styled.a`
  ${font.regular}
  color: ${color.textLight};
  ${font.sizeRem(2)}
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${color.buttonColor};
  padding: 0px ${spacing.single(1)};
  border-radius: 8px;
  margin: ${spacing.single(2)};
`;
