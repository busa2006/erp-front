import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const Item = () => {
  
  return(
    <>
      <Sample title='품목등록'
              domain='item'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default Item;
