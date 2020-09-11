import React from 'react';

import {
  MainContainer,
  TextItem,
  IconRow,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  Button,
} from './styles';

export default function Contact() {
  return (
    <MainContainer>
      <TextItem fontSize={1.5}>
        If you are interested in reaching out, please email me or message me on LinkedIn to to setup
        a time to talk
      </TextItem>
      <Button>
        <EmailIcon fontSize="large" />
        <TextItem fontSize={1.5}> Kevicha5928@gmail.com</TextItem>
      </Button>
      <Button target="_blank" href="https://github.com/kevicha5928">
        <GitHubIcon fontSize="large" />
        <TextItem fontSize={1.5}> Kevicha5928</TextItem>
      </Button>
      <Button target="_blank" href="https://www.linkedin.com/in/kevin-chang-49528b5b/">
        <LinkedInIcon fontSize="large" />
        <TextItem fontSize={1.5}> Kevin Chang</TextItem>
      </Button>
    </MainContainer>
  );
}
