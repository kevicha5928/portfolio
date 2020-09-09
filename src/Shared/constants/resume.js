import { Logos, LogoObj } from './images';

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

const { python, cpp, arduino } = LogoObj;

export const experience = [
  {
    company: 'Meso Scale Discovery',
    startDate: 'May 2017',
    endDate: 'Current',
    currentJob: true,
    jobTitle: 'Automation Engineer II',
    relevantSkills: [
      python,
      {
        icon: null,
        title: 'Pandas',
      },
      {
        icon: null,
        title: 'Plotly',
      },
      {
        icon: null,
        title: 'PLC',
      },
      {
        icon: null,
        title: 'Machine Vision',
      },
      {
        icon: null,
        title: '6-Dof Robot Programming',
      },
    ],
    details: [
      {
        task:
          'Created an intellectual property proposal for a new method of machine vision assisted product assembly that would increase accuracy and reliability while decreasing system complexity.',
      },
      {
        task:
          'Developed Python application to read data from a PLC to improve logging capabilities and data analytics.',
      },
      {
        task:
          'Created companion web application for data visualization from the aforementioned data logging program.',
      },
      {
        task:
          'Created a python application that collected data from an ultrasonic sensor to track sensor performance and provide metrics to improve calibration.',
      },
      {
        task:
          'Provided critical software support to active production machines to ensure downtime was kept to a minimum.',
      },
      {
        task:
          'Led the effort to refactor existing PLC software routines which resulted in more readability and traceability',
      },
      {
        task:
          'Optimized the PLC subroutines in a critical production machine resulting in a 20% improvement in production speed.',
      },
      {
        task:
          'Developed an adaptive self-correcting product assembly method to improve product quality. As a result, product yields increased to 99.8% from a previous ~96% yield.',
      },
      {
        task:
          'Established a sequential code structure for robot motion control resulting in more readable code and increasing reliability.',
      },
      {
        task:
          'Developed PLC code to generate robot position coordinates to reduce the number of robot positions that need to be manually taught. This resulted in less human induced error when robot positions needed to be retaught.',
      },
      {
        task:
          'Improved the accuracy and reliability of machine vision inspection systems by optimizing visual targets',
      },
    ],
  },
  {
    company: 'UMBC Autonomous Systems Research Lab',
    startDate: 'May 2015',
    endDate: 'May 2017',
    currentJob: false,
    jobTitle: 'Graduate Research Assistant',
    relevantSkills: [
      python,
      cpp,

      {
        icon: null,
        title: 'Computer Vision',
      },
      {
        icon: null,
        title: 'ROS',
      },
    ],
    details: [
      {
        task: 'Project Lead on motion capture quadcopter project',
      },
      {
        task:
          'Developed application to use depth sensing and skeleton tracking capabilities of Microsoft Kinect V2 to tele-operate a robot arm',
      },
    ],
  },
  {
    company: 'UMBC Prototyping and Design Lab',
    startDate: 'June 2014',
    endDate: 'May 2015',
    currentJob: false,
    jobTitle: 'Undergraduate Research Assistant',
    relevantSkills: [
      arduino,
      {
        icon: null,
        title: '3D printing',
      },
      {
        icon: null,
        title: 'Laser Cutting',
      },
    ],
    details: [
      {
        task:
          'Collaborated in an interdisciplinary team to design, program, and build a multi-touch pressure pad interface with intended applications for clients who have muscular impairments located in their hands.',
      },
      {
        task:
          'Experimental results derived from my work have received positive feedback from ASSETS 2015, an internationally recognized computers/accessibility conference.',
      },
    ],
  },
];

export const education = [
  {
    company: 'University of Maryland, Baltimore County',
    startDate: 'June 2011',
    endDate: 'May 2015',
    jobTitle: 'B.S. in Mechanical Engineering',
    gpa: 3.83,
    education: 1,
  },
  {
    company: 'University of Maryland, Baltimore County',
    startDate: 'May 2015',
    endDate: 'May 2017',
    jobTitle: 'M.S. in Mechanical Engineering',
    gpa: 3.85,
    education: 1,
  },
];

export const aboutMe =
  'I am an aspiring software engineer, looking for problems to solve. Originally, I studied as a Mechanical Engineer, but over time I realized that a vast majority of the cooler projects in the world were deeply intertwined with software. So yea, I knew I could not just stop and be satisfied with learning mechanical design. I had to dive into software as well.';
