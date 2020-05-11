import React from 'react';

import { Item } from './Item';

import {
  GearSetContainer,
  PortraitContainer,
  Portrait,
  GearSetDetails,
  CategoryTitle,
  ItemsList,
  AttributesContainer,
  AttributesList,
  AttributeDetail,
  AttributeName,
} from '../styles/MemberGearSetStyle';

const loader = !Item && <div>Loading...</div>;

export const MemberGearSet = ({ gearSet = {}, portrait = '' }) => {
  const { attributes, gear } = gearSet;

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
        </GearSetDetails>
        <AttributesContainer>
          <CategoryTitle>Attributes</CategoryTitle>
          <AttributesList>
            {attributes &&
              attributes.map(({ Attribute: { ID, Name }, Value }) => (
                <AttributeDetail key={ID}>
                  <AttributeName>{Name}: </AttributeName>
                  {Value}
                </AttributeDetail>
              ))}
          </AttributesList>
        </AttributesContainer>
      </GearSetContainer>
    )
  );
};
