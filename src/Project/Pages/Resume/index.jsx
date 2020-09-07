import React from 'react';
import { Divider, ExperienceEntry, Tag } from 'Shared/components';
// import { Logos } from 'Shared/constants/images';
import { skills, experience, education } from 'Shared/constants/resume';
import IconSkill from './IconSkill';
import { TextItem, MainContainer, GridRow, GridItem, Grid, TagContainer } from './styles';

export default function Resume() {
  return (
    <MainContainer id="resume">
      {/* <TextItem fontSize={3}>Kevin Chang</TextItem> */}
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
