import React, { useState } from 'react';
import { Tag } from 'Shared/components';
import { useTransition, config } from 'react-spring';

import {
  GridItem,
  Card,
  TextItem,
  TagContainer,
  DetailContainer,
  TextContainer,
  SkillsContainer,
  Animated,
} from './styles';
import ImageLinks from './ImageLinks';

export default function ProjectCard({ project }) {
  const [hover, setHover] = useState(true);

  const DetailTransition = useTransition(hover, null, {
    from: { opacity: 0, transform: 'translate3d(0,10px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,0,0)' },
    config: config.stiff,
  });
  const handleHover = (isHover) => {
    setHover(isHover);
  };

  return (
    <GridItem key={project.title}>
      <Card>
        <ImageLinks project={project} />
        <DetailContainer
          onMouseEnter={() => handleHover(false)}
          onMouseLeave={() => handleHover(true)}
        >
          {DetailTransition.map(({ item, props, key }) =>
            item ? (
              <Animated key={key} style={props}>
                <TextContainer>
                  <TextItem fontSize={1.75}>{project.title}</TextItem>
                  <TextItem>{project.description}</TextItem>
                </TextContainer>
              </Animated>
            ) : (
              <Animated key={key} style={props}>
                <SkillsContainer>
                  <TextItem fontSize={1.25}>Utilized Skills</TextItem>
                  <TagContainer>
                    {project.relavantSkills.map((skill) => (
                      <Tag key={skill.title} skill={skill} size={0.8} />
                    ))}
                  </TagContainer>
                </SkillsContainer>
              </Animated>
            ),
          )}
        </DetailContainer>
      </Card>
    </GridItem>
  );
}
