import React from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import {callApi} from './Common';
export default function Grid(fields,columns,path) {
 
  this.fields = fields;
  this.columns = columns;
  this.path = path;

  this.dataProvider = new LocalDataProvider(false);
  this.dataProvider.softDeleting = true;
  this.dataProvider.setFields(this.fields);

  this.gridView = new GridView("realgrid");
  this.gridView.setDataSource(this.dataProvider);
  this.gridView.setColumns(this.columns);
  this.gridView.setEditOptions({
    deletable: true,
    appendable : true
  });
}

Grid.prototype.getProvider = function(){
  return this.dataProvider;
}

Grid.prototype.getView = function(){
  return this.gridView;
}

Grid.prototype.search = async function(){
  this.gridView.commit();
  const config = {method:'get',path:this.path};
  const data = await callApi(config);
  this.dataProvider.setRows(data);
}

Grid.prototype.addRow = function(){
  this.gridView.commit();
  this.dataProvider.addRow([]);
}

Grid.prototype.removeRow = function(){
  const curr = this.gridView.getCurrent();
    
  if(curr.dataRow < 0){
    return;
  }

  this.dataProvider.removeRow(curr.dataRow);
}

Grid.prototype.save = async function(){
  this.gridView.commit();
  const saveData = this.getSaveData();
  const config = {method:'post',path:this.path,param: saveData};
  const data = await callApi(config);
  await this.search();
}


Grid.prototype.getSaveData = function(){

  const saveData = {
    created: [],
    deleted: [],
    updated: []
  }

  const rows = this.dataProvider.getJsonRows();
  const dirtyData = this.dataProvider.getAllStateRows();

  ['created','updated','deleted'].forEach((action)=>{
    dirtyData[action].forEach((item)=>{
      saveData[action].push(rows[item]);
    })
  })

  return saveData;
}