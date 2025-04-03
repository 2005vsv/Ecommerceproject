import axios from 'axios';

const Baseurl="https://api.escuelajs.co/api/v1";
export const getallcategories=async()=> {
    const url=`${Baseurl}/categories`;
    try{
        const {data}=await axios.get(url);
        console.log(data);
        return data;

    }catch(err){
        console.log(err);
    }
  
}


