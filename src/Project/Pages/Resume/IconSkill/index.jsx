import React from 'react';

import { Container, Image, TextItem } from './styles';

export default function Resume({ logo }) {
  return (
    <Container>
      <Image src={logo.img} width={logo.width} />
      <TextItem>{logo.desc}</TextItem>
    </Container>
  );
}
