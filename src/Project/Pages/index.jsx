import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTransition } from 'react-spring';
import usePrevious from 'Shared/hooks/usePrevious';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

import { AniContainer, Animated } from './styles';

export default function Pages() {
  const appState = useSelector((state) => state.appState);
  const activeStep = appState.activePage;
  const prevStep = usePrevious(activeStep);

  function Direction() {
    if (activeStep < prevStep) return ['-', ''];
    return ['', '-'];
  }
  const aniDir = Direction();
  const animatedRef = useRef();
  const transitions = useTransition(activeStep, null, {
    from: { opacity: 0, transform: `translate3d(${aniDir[0]}100%,0,0)` },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: `translate3d(${aniDir[1]}100%,0,0)` },
    onRest: () => (animatedRef.current.style = 'transform: none'),
  });
  /*
  pass in animated ref to Arranged workouts because for some reason
  the parent Container's transform value would change away from a none value to 
  translate3d(0,0,0)
  */
  const pages = [<Home />, <Portfolio />, <Resume />, <Contact />];

  return (
    <AniContainer>
      {transitions.map(({ item, props, key }) => {
        return (
          <Animated key={key} style={props} ref={animatedRef}>
            {pages[item]}
          </Animated>
        );
      })}
    </AniContainer>
  );
}
