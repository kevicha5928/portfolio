import React from 'react';
import { Divider } from 'Shared/components';
import { Logos } from 'Shared/constants/images';

import IconSkill from './IconSkill';
import { TextItem, MainContainer, GridRow, GridItem, Grid } from './styles';

export default function Resume() {
  return (
    <MainContainer>
      <TextItem>This is my resume</TextItem>
      <Grid id="grid">
        <GridRow>
          {Logos.map((item) => (
            <GridItem>
              <IconSkill logo={item} />
            </GridItem>
          ))}
        </GridRow>
      </Grid>
      <Divider />
      {/* <Image src={Logos.matlab} />
      <Image src={Logos.javascript} /> */}
    </MainContainer>
  );
}
