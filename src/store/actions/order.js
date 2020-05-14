import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';


export const purchaseSuccess = (id, orderData)=>{
return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
}
}

export const purchaseFail = (error) =>{
return{
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: error
}
}

export const purchaseStart =(orderData)=>{
    return dispatch =>{
        axios.post( '/orders.json', orderData )
            .then( response => {
               dispatch(purchaseSuccess(response.data, orderData))
            } )
            .catch( error => {
                dispatch(purchaseFail(error))
            } );
    }



}
