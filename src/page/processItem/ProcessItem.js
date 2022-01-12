import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const ProcessItem = () => {
  
  return(
    <>
      <Sample title='공정품목등록'
              domain='processItem'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default ProcessItem;
