import axiosInstance from './Api'

const URL = 'http://localhost:8094/';

export const callApi = async ({method,path,param}) => {
  try{
    const data = await axiosInstance[method](`${URL}${path}`,param);
    return data;
  }catch(error){
    console.error(error)
    alert(error);
    throw error;
  }
}


export const getDropdownList = (items,value,lable)=>{
  let values = [];
  let labels = [];
  
  items.forEach((item)=>{
    values.push(item[value]);
    labels.push(item[lable]);
  });

  return {values:values, labels:labels}
}