import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import { realDesc, memeDesc } from 'Shared/constants/descriptors';
import { red, purple, blue, cyan, green, yellow, orange } from '@material-ui/core/colors';
import AboutMe from './AboutMe';
// import usePrevious from 'Shared/hooks/usePrevious';

import Slideshow from './Slideshow';
import {
  Grid,
  GridRow,
  MainText,
  GridItem,
  AniText,
  AniTextContainer,
  TextRow,
  MainContainer,
} from './styles';

function Home() {
  const [cycle, setCycle] = useState(0);
  const [title, setTitle] = useState(realDesc[0]);
  const [color, setColor] = useState(chooseColor());

  function chooseColor() {
    const tColors = [red, orange, yellow, green, cyan, blue, purple];
    const t = Math.floor(Math.random() * tColors.length);
    const sat = (Math.floor(Math.random() * 3) + 2) * 100;
    return tColors[t][sat];
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const temp = Math.floor(Math.random() * 101);
      if (temp < 90) {
        if (cycle < realDesc.length - 1) {
          setCycle(cycle + 1);
          setTitle(realDesc[cycle + 1]);
          setColor(chooseColor());
        } else {
          setCycle(0);
          setTitle(realDesc[0]);
          setColor(chooseColor());
        }
      } else {
        setTitle(memeDesc[Math.floor(Math.random() * memeDesc.length)]);
        setColor(chooseColor());
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [title, cycle]);

  const transitions = useTransition(title, null, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
  });

  return (
    <MainContainer>
      <Grid id="grid">
        <GridRow>
          <GridItem>
            <TextRow>
              <MainText>Hi, I&apos;m&nbsp;</MainText>
              <MainText weight="bold">Kevin</MainText>
              <MainText>.</MainText>
            </TextRow>
            <TextRow>
              <MainText>I am&nbsp;</MainText>
              <AniTextContainer>
                {transitions.map(({ item, props, key }) => {
                  return (
                    <AniText key={key} style={props} color={color}>
                      {item}
                    </AniText>
                  );
                })}
              </AniTextContainer>
            </TextRow>
          </GridItem>

          <GridItem>
            <Slideshow desc={title} />
          </GridItem>
        </GridRow>
      </Grid>

      {/* <AboutMe /> */}
    </MainContainer>
  );
}

export default Home;
