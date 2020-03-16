import React from 'react';

import { Item } from './Item';

export const MemberGearSet = ({ gearSet = {}, portrait = '' }) => {
  const { attributes, classid, gear, level, jobid } = gearSet;

  return (
    <div>
      <h2>GearSet</h2>
      <div>
        <img src={portrait} alt="portrait" />
      </div>
      {gear &&
        gear.map(({ category, id }) => (
          <Item category={category} itemID={id} key={id} />
        ))}
    </div>
  );
};
