import React, { useState, useEffect } from 'react';

import { useFreeCompanyInfos } from '../services/hooks';

import { MembersList } from './MembersList';
import { ActivitiesFeed } from './ActivitiesFeed';

export const HomePage = () => {
  const { freeCompInfos, error, isLoading, loadFCInfos } = useFreeCompanyInfos(
    'Les Chatons Sales'
  );

  return (
    <div>
      <ActivitiesFeed />
      <MembersList />
    </div>
  );
};
