import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { Animated, ImageContainer, Image } from './styles';
import LinkList from './LinkList';

export default function ImageLinks({ project }) {
  const [showLinks, setShowLinks] = useState(false);
  console.log(showLinks);
  const transitions = useTransition(showLinks, null, {
    from: { transform: 'translate3d(0,100px,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(0,100px,0)' },
  });

  const handleHover = (isHover) => {
    setShowLinks(isHover);
  };

  return (
    <ImageContainer onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <Animated key={key} style={props}>
              <LinkList links={project.links} />
            </Animated>
          ),
      )}

      <Image src={project.image} />
    </ImageContainer>
  );
}
