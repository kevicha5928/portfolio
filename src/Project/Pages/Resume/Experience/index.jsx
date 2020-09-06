import React, { Fragment } from 'react';
import { Divider, ExperienceEntry } from 'Shared/components';
import { experience } from 'Shared/constants/resume';

import { TextItem, MainContainer } from './styles';

export default function Experience() {
  return (
    <MainContainer>
      <TextItem fontSize={3}>
        Experience
        <Divider />
      </TextItem>
      {experience.map((item) => (
        <ExperienceEntry key={`${item.company}${item.jobtitle}`} experience={item} />
      ))}
    </MainContainer>
  );
}
