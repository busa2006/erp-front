import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'processNo',
    dataType: ValueType.NUMBER,
},
{
    fieldName: 'processNm',
    dataType: ValueType.TEXT,
}];

export const columns = async () => [{
    name: "processNo",
    fieldName: "processNo",
    type: "data",
    width: "80",
    numberFormat: '#,##0',
    editable: false,
    
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "공정번호",
    }
}, {
    name: "processNm",
    fieldName: "processNm",
    type: "data",
    width: "150",
    required:true,
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "공정명",
    }
}]
