import React from 'react';

import { useItemInfos } from '../services/itemHook';

import {
  ItemContainer,
  ImgContainer,
  ItemImg,
  ItemDetails,
  CategoryName,
  ItemName,
} from '../styles/ItemStyle';

export const Item = ({ category, itemID }) => {
  const { itemInfos, error, isLoading } = useItemInfos(itemID);
  const { icon, name } = itemInfos;

  return (
    !isLoading && (
      <ItemContainer key={itemID}>
        <ImgContainer>
          <ItemImg src={`https://xivapi.com/${icon}`} alt="item icon" />
        </ImgContainer>
        <ItemDetails>
          <CategoryName>{category}</CategoryName>
          <ItemName>{name}</ItemName>
        </ItemDetails>
      </ItemContainer>
    )
  );
};
