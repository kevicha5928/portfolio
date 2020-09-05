import React from 'react';
import { Logos } from 'Shared/constants/images';

import { TextItem, Image } from './styles';

export default function Resume() {
  return (
    <div>
      <TextItem>This is my resume</TextItem>
      {Logos.lang.map((item) => (
        <Image src={item} />
      ))}

      {/* <Image src={Logos.matlab} />
      <Image src={Logos.javascript} /> */}
    </div>
  );
}
