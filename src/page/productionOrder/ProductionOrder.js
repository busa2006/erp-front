import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const ProductionOrder = () => {
  
  return(
    <>
      <Sample title='생산지시등록'
              domain='productionOrder'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default ProductionOrder;
