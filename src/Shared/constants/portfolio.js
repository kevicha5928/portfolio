import sortApp from './assets/software/sortApp.jpg';
import peetz from './assets/software/PizzaApp.png';
import workoutapp from './assets/software/workoutapp.jpg';
import cameraTrack from './assets/maker/cameratrack.jpg';
// import exerMaterial from './assets/software/exerMaterial.png';

import { LogoObj } from './images';

const { arduino, javascript, react, redux, nodejs, firebase, mui } = LogoObj;

export const portfolio = [
  {
    title: 'Weight Lifting App',
    description:
      'An application to allow uers to create custom workouts and workout schedules and track their progress as they improve',
    image: workoutapp,
    git: null,
    website: 'https://workouthero.herokuapp.com/',
    youtube: null,
    relavantSkills: [react, javascript, nodejs, firebase, redux, mui],
    status: 'in progress',
  },
  {
    title: 'Sorting Visualizer',
    description:
      'An application to allow uers to view and visually step through how different sorting algorithms work.',
    image: sortApp,
    git: 'https://github.com/kevicha5928/Sorting-Visualizer',
    website: 'https://kevicha5928.github.io/Sorting-Visualizer/',
    youtube: null,
    relavantSkills: [react, javascript, nodejs, mui],
    status: 'complete',
  },
  {
    title: 'Pizza Dough Calculator',
    description: 'Web App for calculating ingredients for neopolitan pizza dough',
    image: peetz,
    git: 'https://github.com/kevicha5928/Peetz-2.0',
    website: null,
    youtube: null,
    relavantSkills: [arduino],
    status: 'in progress',
  },
  {
    title: 'Motorized Camera Slider',
    description: 'Designed a relatively inexpensive DIY motorized camera slider',
    image: cameraTrack,
    git: 'https://github.com/kevicha5928/Arduino-Motorized-Camera-Slider',
    website: null,
    youtube: 'https://www.youtube.com/watch?v=bMuzOfMlkrY',
    relavantSkills: [arduino],
    status: 'complete',
  },
];
