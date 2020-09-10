import React, { useRef } from 'react';
import { Divider, Tag } from 'Shared/components';
import {
  GridItem,
  Card,
  TextItem,
  TagContainer,
  DetailContainer,
  TextContainer,
  SkillsContainer,
} from './styles';
import ImageLinks from './ImageLinks';

export default function ProjectCard({ project }) {
  const descRef = useRef();
  const skillsRef = useRef();
  // console.log(project);
  function scrollToSkills() {
    skillsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }
  function scrollToDesc() {
    descRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }

  return (
    <GridItem key={project.title}>
      <Card>
        <ImageLinks project={project} />
        <Divider />
        <DetailContainer onMouseEnter={() => scrollToSkills()} onMouseLeave={() => scrollToDesc()}>
          <TextContainer ref={descRef}>
            <TextItem fontSize={2}>{project.title}</TextItem>
            <TextItem>{project.description}</TextItem>
          </TextContainer>

          <SkillsContainer ref={skillsRef}>
            <TextItem fontSize={1.25}>Utilized Skills</TextItem>
            <TagContainer>
              {project.relavantSkills.map((skill) => (
                <Tag key={skill.title} skill={skill} size={0.8} />
              ))}
            </TagContainer>
          </SkillsContainer>
        </DetailContainer>
      </Card>
    </GridItem>
  );
}
