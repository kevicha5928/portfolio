import React from 'react';

import { TagContainer, TextItem, LogoBit } from './styles';

export default function Tag({ skill, size }) {
  return (
    <TagContainer>
      {skill.icon ? <LogoBit src={skill.icon} /> : null}
      <TextItem fontSize={size || 1}>{skill.title || skill}</TextItem>
    </TagContainer>
  );
}
