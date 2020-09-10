import React, { useState } from 'react';
import { useTransition, config } from 'react-spring';
// import { Divider } from 'Shared/components';

import { Animated, ImageContainer, Image } from './styles';
import LinkList from './LinkList';

export default function ImageLinks({ project }) {
  const [showLinks, setShowLinks] = useState(false);
  // console.log(showLinks);
  const linkTrans = useTransition(showLinks, null, {
    from: { opacity: 0, transform: 'translate3d(0,10px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
    config: config.gentle,
  });
  // const dividerTrans = useTransition(showLinks, null, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: config.stiff,
  // });

  const handleHover = (isHover) => {
    setShowLinks(isHover);
  };

  return (
    <ImageContainer onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      {linkTrans.map(
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
