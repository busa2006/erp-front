import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const ProductionReceive = () => {
  
  return(
    <>
      <Sample title='생산입고등록'
              domain='productionReceive'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default ProductionReceive;
