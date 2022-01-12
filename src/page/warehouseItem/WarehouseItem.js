import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const WarehouseItem = () => {
  
  return(
    <>
      <Sample title='창고품목등록'
              domain='warehouseItem'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default WarehouseItem;
