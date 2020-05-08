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

const loader = !Item && <div>Loading...</div>;

export const MemberGearSet = ({ gearSet = {}, portrait = '' }) => {
  const { attributes, classid, gear, level, jobid } = gearSet;
  console.log(attributes);

  return (
    loader || (
      <GearSetContainer>
        <PortraitContainer>
          <Portrait src={portrait} alt="portrait" />
        </PortraitContainer>
        <GearSetDetails>
          <CategoryTitle>GearSet</CategoryTitle>
          <ItemsList>
            {gear &&
              gear.map(({ category, item, id }) => (
                <Item category={category} item={item} itemID={id} key={id} />
              ))}
          </ItemsList>
          <ul>
            {attributes &&
              attributes.map(({ Attribute: { ID, Name }, Value }) => (
                <li key={ID}>
                  {Name}: {Value}
                </li>
              ))}
          </ul>
        </GearSetDetails>
      </GearSetContainer>
    )
  );
};
