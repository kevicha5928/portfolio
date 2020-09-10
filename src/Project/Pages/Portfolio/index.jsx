import React from 'react';
import { portfolio } from 'Shared/constants/portfolio';
import { Divider, Tag } from 'Shared/components';
import {
  Grid,
  GridRow,
  GridItem,
  Image,
  Card,
  TextItem,
  ImageContainer,
  TagContainer,
} from './styles';

export default function Portfolio() {
  return (
    <Grid>
      <GridRow>
        {portfolio.map((project) => (
          <GridItem>
            <Card>
              <ImageContainer>
                <Image src={project.image} />
              </ImageContainer>
              <Divider />
              <TextItem fontSize={2}>{project.title}</TextItem>
              <TextItem>{project.description}</TextItem>
              <TagContainer>
                {project.relavantSkills.map((skill) => (
                  <Tag ey={skill.title} skill={skill} />
                ))}
              </TagContainer>
            </Card>
          </GridItem>
        ))}
      </GridRow>
    </Grid>
  );
}
