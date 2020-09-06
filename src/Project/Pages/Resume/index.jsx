import React from 'react';
import { Divider } from 'Shared/components';
import { Logos } from 'Shared/constants/images';

import IconSkill from './IconSkill';
import { TextItem, MainContainer, GridRow, GridItem, Grid } from './styles';

export default function Resume() {
  return (
    <MainContainer>
      <TextItem fontSize={48}>Kevin Chang</TextItem>
      <TextItem fontSize={32}>
        Primary Software Skills
        <Divider />
      </TextItem>
      <Grid id="grid">
        <GridRow>
          {Logos.map((item) => (
            <GridItem key={item.desc}>
              <IconSkill logo={item} />
            </GridItem>
          ))}
        </GridRow>
      </Grid>
      <TextItem fontSize={32}>
        Other Software Skills
        <Divider />
      </TextItem>

      {/* <Image src={Logos.matlab} />
      <Image src={Logos.javascript} /> */}
    </MainContainer>
  );
}
