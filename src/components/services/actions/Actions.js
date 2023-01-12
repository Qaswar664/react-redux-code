import { ADD_TO_CARD } from "../Constant"
import { REMOVE_TO_CARD } from "../Constant";
export const addToCart=(data)=>{
    console.log('action data',data);
    return{
        type:ADD_TO_CARD,
        data:data
    }
}



// Remove To Card Function
export const removeToCart=()=>{
    console.log('remove to card');
    return{
        type:REMOVE_TO_CARD,
       
    }
}