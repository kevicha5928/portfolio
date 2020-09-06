import React from 'react';
import { Divider } from 'Shared/components';
// import { Logos } from 'Shared/constants/images';
import { skills } from 'Shared/constants/resume';
import Experience from './Experience';
import IconSkill from './IconSkill';
import { TextItem, MainContainer, GridRow, GridItem, Grid } from './styles';

export default function Resume() {
  return (
    <MainContainer>
      <TextItem fontSize={3}>Kevin Chang</TextItem>
      <TextItem fontSize={3}>
        Skills
        <Divider />
      </TextItem>
      <TextItem fontSize={1.5}>Primary Software Skills</TextItem>
      <Grid id="grid">
        <GridRow>
          {skills.primary.map((item) => (
            <GridItem key={item.desc}>
              <IconSkill logo={item} />
            </GridItem>
          ))}
        </GridRow>
      </Grid>
      <TextItem fontSize={1.5}>Other Software Skills</TextItem>
      <Experience />
    </MainContainer>
  );
}
