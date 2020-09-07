import React from 'react';
import { ExperienceEntry } from 'Shared/components';
import { experience } from 'Shared/constants/resume';

import { MainContainer } from './styles';

export default function Experience() {
  return (
    <MainContainer>
      {experience.map((item) => (
        <ExperienceEntry key={`${item.company}${item.jobtitle}`} experience={item} />
      ))}
    </MainContainer>
  );
}
