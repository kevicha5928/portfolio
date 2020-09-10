import sortApp from './assets/software/sortApp.jpg';
import peetz from './assets/software/PizzaApp.png';
import workoutapp from './assets/software/workoutapp.jpg';
import cameraTrack from './assets/maker/cameratrack.jpg';
// import exerMaterial from './assets/software/exerMaterial.png';

import { LogoObj } from './images';

const { arduino, javascript, react, redux, nodejs, firebase, mui } = LogoObj;

export const portfolio = [
  {
    title: 'Weight Lifting Tracker',
    description:
      'An application to allow uers to create custom workouts and workout schedules and track their progress as they improve',
    image: workoutapp,
    links: [
      {
        type: 'Website',
        link: 'https://workouthero.herokuapp.com/',
      },
    ],

    relavantSkills: [react, javascript, nodejs, firebase, redux, mui],
    status: 'in progress',
  },
  {
    title: 'Sorting Visualizer',
    description:
      'An application to allow uers to view and visually step through how different sorting algorithms work.',
    image: sortApp,
    links: [
      {
        type: 'Github',
        link: 'https://github.com/kevicha5928/Sorting-Visualizer',
      },
      {
        type: 'Website',
        link: 'https://kevicha5928.github.io/Sorting-Visualizer/',
      },
    ],

    relavantSkills: [react, javascript, nodejs, mui],
    status: 'complete',
  },
  {
    title: 'Pizza Dough Calculator',
    description: 'Web App for calculating ingredients for neopolitan pizza dough',
    image: peetz,
    links: [
      {
        type: 'Github',
        link: 'https://github.com/kevicha5928/Peetz-2.0',
      },
    ],

    relavantSkills: [arduino],
    status: 'in progress',
  },
  {
    title: 'Motorized Camera Slider',
    description: 'Designed a relatively inexpensive DIY motorized camera slider',
    image: cameraTrack,
    links: [
      {
        type: 'Github',
        link: 'https://github.com/kevicha5928/Arduino-Motorized-Camera-Slider',
      },
      {
        type: 'Youtube',
        link: 'https://www.youtube.com/watch?v=bMuzOfMlkrY',
      },
    ],

    relavantSkills: [arduino],
    status: 'complete',
  },
];
