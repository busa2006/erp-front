import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const ItemProcess = () => {
  
  return(
    <>
      <Sample title='품목공정등록'
              domain='itemProcess'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default ItemProcess;
