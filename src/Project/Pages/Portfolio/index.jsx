import React from 'react';
import { images } from 'Shared/constants/images';

import { Grid, GridRow, GridItem, Image } from './styles';

export default function Portfolio() {
  return (
    <Grid>
      <GridRow>
        {/* <GridItem>
          <TextItem>{window.innerWidth}</TextItem>
        </GridItem> */}
        {images.foodie.map((item) => (
          <GridItem>
            <Image src={item} />
          </GridItem>
        ))}
      </GridRow>
    </Grid>
  );
}
