import React, { Fragment } from 'react';

import { TextRow, Decorator, Description, ItemDetail } from './styles';

export default function ExperienceEntry({ experience }) {
  const { company, startDate, endDate, currentJob, jobTitle, details } = experience;
  return (
    <Fragment>
      <TextRow>
        <Description>{company}</Description>
        <Decorator>
          {startDate}
          {endDate
            ? ` to 
          ${endDate}`
            : null}
        </Decorator>
      </TextRow>
      <TextRow>
        <Description>{jobTitle}</Description>
      </TextRow>
      <ul>
        {details.map((item, index) => (
          <ItemDetail key={index.toString()}>{item.task}</ItemDetail>
        ))}
      </ul>
    </Fragment>
  );
}
