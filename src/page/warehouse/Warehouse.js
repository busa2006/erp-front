import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const Warehouse = () => {
  
  return(
    <>
      <Sample title='창고등록'
              domain='warehouse'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default Warehouse;
