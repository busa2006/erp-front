import React, { useEffect,useState } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import Grid from './PageCommon'; 

const Sample = ({title,domain,fields,columns}) => {

  const [grid,setGrid] = useState();

  useEffect(() => {
    (async function(){
      const cols = await columns();
      setGrid(new Grid(fields,cols,domain));
    }());
  },[])
  
  return(
    <div className="Grid">
      <h2>{title}</h2>
      <div id='realgrid'></div>
      <button onClick={() => grid.search()}>조회</button>
      <button onClick={() => grid.addRow()}>추가</button>
      <button onClick={() => grid.removeRow()}>삭제</button>
      <button onClick={() => grid.save()}>저장</button>
    </div>
  ) 
}

export default Sample;
