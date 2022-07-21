import { useState } from 'react';

import products from '../data/MOCK_DATA.json'

const myPromise = new Promise((resolve, reject) => {

  return (
    <>
      <ItemList items={productList} />
      <ItemList items={productList} />
    </>


  )
});
export default ItemListContainer;