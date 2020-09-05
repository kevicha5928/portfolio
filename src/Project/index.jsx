import React from 'react';

import NavBarTop from './NavBarTop';
import Pages from './Pages';

import { ProjectPage } from './styles';

function Project() {
  return (
    <ProjectPage id="Project">
      <NavBarTop />
      <Pages />
    </ProjectPage>
  );
}

export default Project;
