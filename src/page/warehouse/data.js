import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'warehouseNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'warehouseNm',
    dataType: ValueType.TEXT,
}];

export const columns = () => [{
    name: "warehouseNo",
    fieldName: "warehouseNo",
    type: "data",
    width: "80",
    numberFormat: '#,##0',
    editable: false,
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "창고번호",
    }
}, {
    name: "warehouseNm",
    fieldName: "warehouseNm",
    type: "data",
    width: "150",
    required:true,
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "창고명",
    }
}]
