import { ValueType } from "realgrid";
import {callApi,getDropdownList} from '../../common';

export const fields = [
{
    fieldName: 'orderNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'itemNo',
    dataType: ValueType.NUMBER,
},
{
  fieldName: 'orderQt',
  dataType: ValueType.NUMBER,
},
];

export const columns = async () =>{
    
    const items = await callApi({method:'get',path:'item'});
    const itemDropdown = getDropdownList(items,'itemNo','itemNm');


    const columns = [{
      name: "orderNo",
      fieldName: "orderNo",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      editable:false,
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "지시번호",
      }
    },{
      name: "itemNo",
      fieldName: "itemNo",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "품목",
      },
      editor: {
          type: 'list',
          values: itemDropdown.values,
          labels: itemDropdown.labels,
      },
    },{
      name: "orderQt",
      fieldName: "orderQt",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "지시수량",
      }
  }];
    return columns;
}
