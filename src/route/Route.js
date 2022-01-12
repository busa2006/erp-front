import React from "react";
import { Routes,Route,Link } from "react-router-dom";
import {Home, Item, Process,ItemProcess,ProcessItem, 
        Warehouse, WarehouseItem, ProductionOrder, 
        ProductionResult, ProductionReceive} from '../page'

const PageRoute = () => {
  return (
  <Routes>
    <Route path="/"  element={<Home />}/>
    <Route path="/item"  element={<Item />}/>
    <Route path="/process"  element={<Process />}/>
    <Route path="/itemProcess"  element={<ItemProcess />}/>
    <Route path="/processItem"  element={<ProcessItem />}/>
    <Route path="/warehouse"  element={<Warehouse />}/>
    <Route path="/warehouseItem"  element={<WarehouseItem />}/>
    <Route path="/productionOrder"  element={<ProductionOrder />}/>
    <Route path="/productionResult"  element={<ProductionResult />}/>
    <Route path="/productionReceive"  element={<ProductionReceive />}/>

  </Routes>)
}

export default PageRoute;