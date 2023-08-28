import * as actionType from '../constant/cartConstant';
export const cartReducer = (state ={cartItem: []}, action)=>{

    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItem.find(product => product.id === item.id);

            if(exist){
                return {...state, cartItem: state.cartItem.map(data => data.product === item.product ? item:data)}

            }else{
                return {...state, cartItem: [...state.cartItem, item ]}
            }

        case actionType.REMOVE_FROM_CART: 
            return{...state, cartItem: state.cartItem.filter(product => product.id !== action.payload)}
        
        default:
            return state;
    }
}