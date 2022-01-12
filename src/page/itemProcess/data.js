import { ValueType } from "realgrid";
import {callApi} from '../../common';

export const fields = [{
    fieldName: 'itemNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'processNo',
    dataType: ValueType.NUMBER,
}];

export const columns = async () =>{
    const items = await callApi({method:'get',path:'item'});
    const processes = await callApi({method:'get',path:'process'});
    const itemDropdown = getDropdownList(items,'itemNo','itemNm');
    const processDropdown = getDropdownList(processes,'processNo','processNm');

    const columns = [{
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
      }
    },{
      name: "processNo",
      fieldName: "processNo",
      type: "data",
      width: "80",
      numberFormat: '#,##0',
      styles: {
          textAlignment: "center"
      },
      header: {
          text: "공정",
      },
      editor: {
          type: 'list',
          values: processDropdown.values,
          labels: processDropdown.labels,
      }
    }];
    return columns;
  }

  const getDropdownList = (items,value,lable)=>{
    let values = [];
    let labels = [];
    
    items.forEach((item)=>{
      values.push(item[value]);
      labels.push(item[lable]);
    });

    return {values:values, labels:labels}
  }