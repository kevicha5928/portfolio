import React from 'react';
import { Divider, ExperienceEntry, Tag } from 'Shared/components';
// import { Logos } from 'Shared/constants/images';
import { skills, experience, education } from 'Shared/constants/resume';
import resume from 'Shared/constants/assets/Kchang_SW_CV_04Sep2020.pdf';

import IconSkill from './IconSkill';
import {
  TextItem,
  MainContainer,
  GridRow,
  GridItem,
  Grid,
  TagContainer,
  DownloadFile,
} from './styles';

export default function Resume() {
  return (
    <MainContainer id="resume">
      {/* <TextItem fontSize={3}>Kevin Chang</TextItem> */}
      <DownloadFile href={resume} download="Chang_Kevin_Resume">
        Download Resume
      </DownloadFile>
      <TextItem fontSize={3}>
        Primary Skills
        <Divider />
      </TextItem>
      <Grid id="grid">
        <GridRow>
          {skills.primary.map((item) => (
            <GridItem key={item.desc}>
              <IconSkill logo={item} />
            </GridItem>
          ))}
        </GridRow>
      </Grid>
      <TextItem fontSize={1.75}>Other Skills</TextItem>
      <TagContainer>
        {skills.other.map((item) => (
          <Tag key={item} skill={item} />
        ))}
      </TagContainer>
      <TextItem fontSize={3}>
        Experience
        <Divider />
      </TextItem>
      {experience.map((item) => (
        <ExperienceEntry key={`${item.company}${item.jobtitle}`} experience={item} />
      ))}
      <TextItem fontSize={3}>
        Education
        <Divider />
      </TextItem>
      {education.map((item) => (
        <ExperienceEntry key={`${item.company}${item.jobtitle}`} experience={item} />
      ))}
    </MainContainer>
  );
}
