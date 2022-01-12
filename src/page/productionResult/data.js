import { ValueType } from "realgrid";
import {callApi,getDropdownList} from '../../common';

export const fields = [
{
    fieldName: 'resultNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'orderNo',
    dataType: ValueType.NUMBER,
},
{
  fieldName: 'resultQt',
  dataType: ValueType.NUMBER,
},
];

export const columns = async () =>{
    
    const orders = await callApi({method:'get',path:'productionOrder'});
    const orderDropdown = getDropdownList(orders,'orderNo');

    const columns = [{
      name: "resultNo",
      fieldName: "resultNo",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      editable:false,
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "실적번호",
      }
    },{
      name: "orderNo",
      fieldName: "orderNo",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "주문",
      },
      editor: {
          type: 'list',
          values: orderDropdown.values,
          labels: orderDropdown.values,
      },
    },{
      name: "resultQt",
      fieldName: "resultQt",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "실적수량",
      }
  }];
    return columns;
}
