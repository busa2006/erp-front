import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'itemNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'itemNm',
    dataType: ValueType.TEXT,
}];

export const columns = () => [{
    name: "itemNo",
    fieldName: "itemNo",
    type: "data",
    width: "80",
    numberFormat: '#,##0',
    editable: false,
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "품목번호",
    }
}, {
    name: "itemNm",
    fieldName: "itemNm",
    type: "data",
    width: "150",
    required:true,
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "품목명",
    }
}]
