import axios from "axios"

import * as actioType from '../constant/cartConstant'
const URL = "http://localhost:8000";
export const addCart = (id,quantity)=> async(dispatch)=>{

    try {
        const {data} = await axios.get(`${URL}/product/${id}`);

        dispatch({type: actioType.ADD_TO_CART, payload: {...data, quantity}});


    } catch (error) {
                dispatch({type: actioType.ADD_TO_CART_ERROR, payload: error.message});

    }
    
}
export const removeFromCart = (id)=> (dispatch)=>{
    dispatch({type: actioType.REMOVE_FROM_CART, payload: id});
}