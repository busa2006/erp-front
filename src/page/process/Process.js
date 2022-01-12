import React, { useEffect,useState } from 'react';
import {Sample} from '../../common'
import {fields, columns} from './data'
const Process = () => {
  
  return(
    <>
      <Sample title='공정등록' 
              domain='process'
              fields={fields}
              columns={columns} />
    </>
  ) 
}

export default Process;
