import { ValueType } from "realgrid";
import {callApi,getDropdownList} from '../../common';

export const fields = [
{
    fieldName: 'resultNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'resultQt',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'receiveNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'receiveQt',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'warehouseNo',
    dataType: ValueType.NUMBER,
},
];

export const columns = async () =>{
    
    const warehouse = await callApi({method:'get',path:'warehouse'});
    const warehouseDropdown = getDropdownList(warehouse,'warehousesNo','warehousesNm');

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
      name: "resultQt",
      fieldName: "resultQt",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      editable:false,
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "실적수량",
      }
    },{
			name: "receiveNo",
			fieldName: "receiveNo",
			type: "data",
			width: "80",
			numberFormat: '#,##0',
			editable:false,
			styles: {
					textAlignment: "center"
			},
			header: {
					text: "입고번호",
			}
    },{
      name: "receiveQt",
      fieldName: "receiveQt",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "입고수량",
      }
    },{
      name: "warehouseNo",
      fieldName: "warehouseNo",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "창고",
      },
      editor: {
          type: 'list',
          values: warehouseDropdown.values,
          labels: warehouseDropdown.values,
      },
    }];
    return columns;
}
