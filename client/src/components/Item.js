import React from 'react';

import { useItemInfos } from '../services/itemHook';

export const Item = ({ category, itemID }) => {
  const { itemInfos, error, isLoading } = useItemInfos(itemID);
  const { class_job_category, description, icon, name } = itemInfos;

  return (
    !isLoading && (
      <div key={itemID}>
        <div>
          <img src={`https://xivapi.com/${icon}`} alt="item icon" />
        </div>
        <span>{category}</span>
        <span>{name}</span>
        <div>
          {class_job_category && (
            <span>Class/Job: {class_job_category.name}</span>
          )}
          <span>{description}</span>
        </div>
      </div>
    )
  );
};
