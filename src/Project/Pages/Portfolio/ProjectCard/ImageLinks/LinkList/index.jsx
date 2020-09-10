import React from 'react';
import { LinksContainer, LonkButton, Text } from './styles';

export default function LinkList({ links }) {
  return (
    <LinksContainer>
      {links.map((link) => (
        <LonkButton target="_blank" href={link.link} key={link.type}>
          <Text>{link.type}</Text>
        </LonkButton>
      ))}
    </LinksContainer>
  );
}
