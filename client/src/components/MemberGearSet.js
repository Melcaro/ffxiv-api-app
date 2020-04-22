import React from 'react';

import { Item } from './Item';

import {
  GearSetContainer,
  PortraitContainer,
  Portrait,
  GearSetDetails,
  CategoryTitle,
  ItemsList,
} from '../styles/MemberGearSetStyle';

export const MemberGearSet = ({ gearSet = {}, portrait = '' }) => {
  const { attributes, classid, gear, level, jobid } = gearSet;

  return (
    <GearSetContainer>
      <PortraitContainer>
        <Portrait src={portrait} alt="portrait" />
      </PortraitContainer>
      <GearSetDetails>
        <CategoryTitle>GearSet</CategoryTitle>
        <ItemsList>
          {gear &&
            gear.map(({ category, id }) => (
              <Item category={category} itemID={id} key={id} />
            ))}
        </ItemsList>
      </GearSetDetails>
    </GearSetContainer>
  );
};
