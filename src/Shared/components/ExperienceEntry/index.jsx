import React, { Fragment } from 'react';
import { Tag } from 'Shared/components';

import {
  TextRow,
  Decorator,
  Description,
  ItemDetail,
  ExperienceContainer,
  TagContainer,
} from './styles';

export default function ExperienceEntry({ experience }) {
  const {
    company,
    startDate,
    endDate,
    jobTitle,
    details,
    relevantSkills,
    education,
    gpa,
  } = experience;
  return (
    <ExperienceContainer>
      <TextRow>
        <Description fontSize={education || 1.5}>{company}</Description>
        {education ? <Decorator fontSize={1}>{endDate}</Decorator> : null}
      </TextRow>
      <TextRow>
        <Description fontSize={1}>{jobTitle}</Description>
        {education ? (
          <Decorator>
            GPA:&nbsp;
            {gpa}
          </Decorator>
        ) : (
          <Decorator fontSize={1}>
            {startDate}
            &nbsp;-&nbsp;
            {endDate}
          </Decorator>
        )}
      </TextRow>

      {relevantSkills ? (
        <Fragment>
          <TextRow>
            <Description fontSize={1}>Relevant Skills</Description>
          </TextRow>
          <TagContainer>
            {relevantSkills.map((skill) => (
              <Tag key={skill.title} skill={skill} />
            ))}
          </TagContainer>
          <ul>
            {details.map(({ task }, index) => (
              <ItemDetail key={index.toString()}>{task}</ItemDetail>
            ))}
          </ul>
        </Fragment>
      ) : null}
    </ExperienceContainer>
  );
}
