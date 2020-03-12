import React, { useState, useEffect } from 'react';

import { useFreeCompanyInfos } from '../services/hooks';

import { MembersList } from './MembersList';
import { ActivitiesFeed } from './ActivitiesFeed';

export const HomePage = () => {
  const { freeCompInfos, error, isLoading } = useFreeCompanyInfos(
    'Les Chatons Sales',
    'Odin'
  );
  console.log(freeCompInfos);
  const { FreeCompany, FreeCompanyMembers } = freeCompInfos;
  // {
  //   ID,
  //   Active,
  //   ActiveMembers,
  //   Server,
  //   DC,
  //   Formed,
  //   Company,
  //   Name,
  //   Recruitment,
  //   Slogan,
  //   Tag,
  // },
  const loader = isLoading && <div>LOADING</div>;

  return (
    loader || (
      <div>
        <ActivitiesFeed />
        <MembersList freeCompanyMembers={FreeCompanyMembers} />
      </div>
    )
  );
};
