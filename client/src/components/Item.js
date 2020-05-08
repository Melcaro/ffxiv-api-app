import React from 'react';

import {
  ItemContainer,
  ImgContainer,
  ItemImg,
  ItemDetails,
  CategoryName,
  ItemName,
} from '../styles/ItemStyle';

export const Item = ({ category, item, itemID }) => {
  const { icon, name } = item;
  return (
    category && (
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
