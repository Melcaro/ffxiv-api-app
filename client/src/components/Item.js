import React from 'react';

import { userItemInfos, useItemInfos } from '../services/itemHook';

export const Item = ({ category, itemID }) => {
  const { itemInfos, error, isLoading } = useItemInfos(itemID);
  return (
    <div key={itemID}>
      <span>{category}</span>
    </div>
  );
};
