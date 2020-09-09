import React, { useRef } from 'react';
import { aboutMe } from 'Shared/constants/resume';
import { Divider } from 'Shared/components';

import { Button, MainContainer, Description, ButtonContainer } from './styles';

export default function AboutMe() {
  const aboutMeRef = useRef();

  return (
    <MainContainer id="about">
      <ButtonContainer>
        <Button onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}>
          About me
        </Button>
        <Divider />
      </ButtonContainer>

      <Description ref={aboutMeRef}>{aboutMe}</Description>
    </MainContainer>
  );
}
