import React from 'react';

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
          <div key={id}>
            <span>{category}</span>
          </div>
        ))}
    </div>
  );
};
