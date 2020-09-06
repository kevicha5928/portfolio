import React, { useState, useEffect } from 'react';
import { useTransition } from 'react-spring';
import { images } from 'Shared/constants/images';
import { Image, AniImg, AniContainer } from './styles';

// import dumps from './assets/foodie/dumps.jpg';

function genIdx(L) {
  return Math.floor(Math.random() * L);
}

function Slideshow({ desc }) {
  const [image, setImage] = useState(0);
  const { foodie, maker, myfood, travel, software } = images;
  useEffect(() => {
    const temp = desc.split(' ');
    let targImg = null;
    if (temp[0] === 'Legend') {
      targImg = travel[genIdx(travel.length)];
    } else {
      switch (temp[1]) {
        case 'Engineer':
          targImg = software[genIdx(software.length)];
          break;
        case 'Chef':
          targImg = myfood[genIdx(myfood.length)];
          break;
        case 'Maker':
          targImg = maker[genIdx(maker.length)];
          break;
        case 'Foodie':
          targImg = foodie[genIdx(foodie.length)];
          break;
        default:
          targImg = travel[genIdx(travel.length)];
          break;
      }
    }
    setImage(targImg);
  }, [desc, foodie, maker, myfood, travel, software]);

  const transitions = useTransition(image, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <AniContainer>
      {transitions.map(({ item, props, key }) => {
        return (
          <AniImg key={key} style={props} src={item}>
            <Image src={item} />
          </AniImg>
        );
      })}
    </AniContainer>
  );
}

export default Slideshow;
