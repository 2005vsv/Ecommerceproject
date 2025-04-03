import axios from 'axios';
import React from 'react'
const Baseurl="https://api.escuelajs.co/api/v1";
export const getallproducts=async()=> {
    const url=`${Baseurl}/products`;
    try{
        const {data}=await axios.get(url);
        console.log(data);
        return data;

    }catch(err){
        console.log(err);
    }
  
}


