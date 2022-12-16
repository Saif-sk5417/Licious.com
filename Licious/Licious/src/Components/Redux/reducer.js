import { isAxiosError } from 'axios'
import * as types  from './actionTypes'
const initialState = {
    isLoading : false ,
    ChickenData : [] ,
    SeaFoodData : [] ,
    isError : false 
}

const reducer = (state=initialState , action) =>{
    const { type , payload } = action
    switch(type){
       case types.GET_CHICKEN_REQUEST :
        return {
            ...state ,
            isLoading : true
        }
        case types.GET_CHICKEN_SUCCESS :
        return {
            ...state ,
            isLoading : false ,
            ChickenData : payload
        }
        case types.GET_CHICKEN_FAILURE :
            return {
                ...state ,
                isLoading : false , 
                isError : true 
            }
        case types.GET_SEAFOOD_REQUEST :
            return {
                ...state ,
                isLoading : true
            }
        case types.GET_SEAFOOD_SUCCESS :
            return {
                ...state ,
                isLoading : false ,
                SeaFoodData : payload
            }  
        case types.GET_SEAFOOD_FAILURE :
            return {
                ...state ,
                isLoading : false ,
                isError : true
            }      
        default :
        return state
    }
}

export { reducer }