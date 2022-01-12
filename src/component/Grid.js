import React, { useEffect } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgrid-data';

const Grid = () => {   

  let dataProvider
  let gridView

  const loadDataClick = () => {
    dataProvider.setRows(rows);
  }

  useEffect(() => {
    dataProvider = new LocalDataProvider(false);
    gridView = new GridView("realgrid");
    gridView.setDataSource(dataProvider);
    dataProvider.setFields(fields);
    gridView.setColumns(columns);
  },[])

  return(
    <div className="Grid">
      <h2>RealGrid2 React Sample</h2>
      <div id='realgrid'></div>
      <button id='loaddata' onClick={loadDataClick}>Load Data!</button>
    </div>
  ) 
}

export default Grid;
