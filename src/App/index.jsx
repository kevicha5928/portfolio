import React, { Fragment } from 'react';

import Project from 'Project';
import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import './fontStyles.css';

function App() {
  return (
    <Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Project />
    </Fragment>
  );
}

export default App;
