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

      <Description ref={aboutMeRef}>{aboutMe.part1}</Description>
      <Description bold fontSize={1.35}>
        {aboutMe.part2}
      </Description>
      <Description>{aboutMe.part3}</Description>
    </MainContainer>
  );
}
