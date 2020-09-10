import React from 'react';
import { portfolio } from 'Shared/constants/portfolio';
import { Divider, Tag } from 'Shared/components';
import { Grid, GridRow, GridItem, Card, TextItem, TagContainer } from './styles';
import ImageLinks from './ImageLinks';

export default function Portfolio() {
  return (
    <Grid>
      <GridRow>
        {portfolio.map((project) => (
          <GridItem key={project.title}>
            <Card>
              <ImageLinks project={project} />
              <Divider />
              <TextItem fontSize={2}>{project.title}</TextItem>
              <TextItem>{project.description}</TextItem>
              <TagContainer>
                {project.relavantSkills.map((skill) => (
                  <Tag key={skill.title} skill={skill} />
                ))}
              </TagContainer>
            </Card>
          </GridItem>
        ))}
      </GridRow>
    </Grid>
  );
}
