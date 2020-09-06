import { Logos } from './images';

export const skills = {
  primary: Logos,
  other: [
    'Matlab',
    'SQL',
    'Pandas',
    'Numpy',
    'matplotlib',
    'Dash',
    'OpenCV',
    'Mongoose',
    'Express',
    'SolidWorks',
    'Microsoft Office',
    'Visual Studio Code',
    'Git',
    'RsLogix 5000',
    'MongoDB',
    'Raspberry Pi',
    'Arduino',
    '3D printing',
    'PLC Programming',
    'Cognex',
  ],
};

export const experience = [
  {
    company: 'Meso Scale Discovery',
    startDate: 'May 2017',
    endDate: null,
    currentJob: true,
    jobTitle: 'Automation Engineer II',
    details: [
      {
        task:
          'Created an intellectual property proposal for a new method of machine vision assisted product assembly that would increase accuracy and reliability while decreasing system complexity.',
        relevantSkills: null,
      },
      {
        task:
          'Developed Python application to read data from a PLC to improve logging capabilities and data analytics.',
        relevantSkills: ['Python', 'Pandas'],
      },
      {
        task:
          'Created companion web application for data visualization from the aforementioned data logging program.',
        relevantSkills: ['Ploty', 'Python', 'Pandas'],
      },
      {
        task:
          'Created a Python application that collected data from an ultrasonic sensor to track sensor performance and provide metrics to improve calibration.',
        relevantSkills: ['Python'],
      },
      {
        task:
          'Provided critical software support to active production machines to ensure downtime was kept to a minimum.',
        relevantSkills: null,
      },
      {
        task:
          'Led the effort to refactor existing PLC software routines which resulted in more readability and traceability',
        relevantSkills: ['PLC', 'Clean-Coding'],
      },
      {
        task:
          'Optimized the PLC subroutines in a critical production machine resulting in a 20% improvement in production speed.',
        relevantSkills: ['PLC', 'Optimization'],
      },
      {
        task:
          'Developed an adaptive self-correcting product assembly method to improve product quality. As a result, product yields increased to 99.8% from a previous ~96% yield.',
        relevantSkills: ['PLC'],
      },
      {
        task:
          'Established a sequential code structure for robot motion control resulting in more readable code and increasing reliability.',
        relevantSkills: ['PLC'],
      },
      {
        task:
          'Developed PLC code to generate robot position coordinates to reduce the number of robot positions that need to be manually taught. This resulted in less human induced error when robot positions needed to be retaught.',
        relevantSkills: ['PLC', 'Optimization'],
      },
      {
        task:
          'Improved the accuracy and reliability of machine vision inspection systems by optimizing visual targets',
        relevantSkills: ['PLC', 'Machine Vision', 'Optimization'],
      },
    ],
  },
  {
    company: 'UMBC Autonomous Systems Research Lab',
    startDate: 'May 2015',
    endDate: 'May 2017',
    currentJob: false,
    jobTitle: 'Graduate Research Assistant',
    details: [
      {
        task: 'Hello',
        relevantSkills: null,
      },
    ],
  },
];
