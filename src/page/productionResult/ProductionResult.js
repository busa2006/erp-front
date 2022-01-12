import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const ProductionResult = () => {
  
  return(
    <>
      <Sample title='생산실적등록'
              domain='productionResult'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default ProductionResult;
