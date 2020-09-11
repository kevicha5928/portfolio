import React from 'react';
import { portfolio } from 'Shared/constants/portfolio';
import { Grid, GridRow } from './styles';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  // console.log(portfolio);
  return (
    <Grid>
      <GridRow id="gridrow">
        {portfolio.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </GridRow>
    </Grid>
  );
}
