// foodie imports
import dumps from './assets/foodie/dumps.jpg';
import fruitCup from './assets/foodie/fruitcup.jpg';
import honeyToast from './assets/foodie/honey_toast.jpg';
import iceCream from './assets/foodie/ice_cream.jpg';
import lomo from './assets/foodie/lomo.jpg';
import ramen from './assets/foodie/ramen.jpg';
import skewers from './assets/foodie/skewers.jpg';
// Maker imports
import cameraTrack from './assets/maker/cameratrack.jpg';
import labcube from './assets/maker/labcube.jpg';
import labcube2 from './assets/maker/labcube2.jpg';
import quad from './assets/maker/quadcopter.jpg';
// My Food Imports
import alfredo from './assets/myfood/alfredo.jpg';
import bread from './assets/myfood/bread.jpg';
import margherita from './assets/myfood/margherita.jpg';
import mylomo from './assets/myfood/mylomo.jpg';
import peetz1 from './assets/myfood/peetz1.jpg';
import steak1 from './assets/myfood/steak1.jpg';
// Traveller
import rocky1 from './assets/travel/rocky1.jpg';
import rocky2 from './assets/travel/rocky2.jpg';
// Engineering
import code1 from './assets/software/code1.jpg';
import sortApp from './assets/software/sortApp.jpg';

// Logos
import javascript from './assets/logos/javascript.png';
import python from './assets/logos/python.png';
import react from './assets/logos/react.png';
import redux from './assets/logos/redux.png';
import firebase from './assets/logos/firebase3.webp';
import nodejs from './assets/logos/nodejs.png';
import arduino from './assets/logos/arduino.png';
import cpp from './assets/logos/c++.png';

export const images = {
  foodie: [dumps, fruitCup, honeyToast, iceCream, lomo, ramen, skewers],
  maker: [cameraTrack, labcube, labcube2, quad],
  myfood: [alfredo, bread, margherita, mylomo, peetz1, steak1],
  travel: [rocky1, rocky2],
  software: [sortApp, code1],
};

export const Logos = [
  { img: react, desc: 'React', width: 100 },
  { img: javascript, desc: 'Javascript', width: 90 },
  { img: python, desc: 'Python', width: 90 },
  { img: nodejs, desc: 'Node Js', width: 90 },
  { img: redux, desc: 'Redux', width: 100 },
  { img: firebase, desc: 'Firebase', width: 100 },
];

export const LogoObj = {
  python: {
    icon: python,
    title: 'Python',
  },
  javascript: {
    icon: javascript,
    title: 'Javascript',
  },
  nodejs: {
    icon: nodejs,
    title: 'Node JS',
  },
  redux: {
    icon: redux,
    title: 'Redux',
  },
  firebase: {
    icon: firebase,
    title: 'Firebase',
  },
  react: {
    icon: react,
    title: 'React',
  },
  cpp: {
    icon: cpp,
    title: 'C++',
  },
  arduino: {
    icon: arduino,
    title: 'arduino',
  },
};
