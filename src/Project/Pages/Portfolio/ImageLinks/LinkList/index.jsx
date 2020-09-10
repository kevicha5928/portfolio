import React from 'react';
import { LinksContainer, TextItem } from './styles';

export default function LinkList({ links }) {
  return (
    <LinksContainer>
      {links.map((link) => (
        <TextItem key={link.type}>{link.type}</TextItem>
      ))}
    </LinksContainer>
  );
}
