
import * as types from './actionTypes'
import axios from 'axios'
export const getChickenData = (category) => (dispatch) =>{
   dispatch({type : types.GET_CHICKEN_REQUEST})
   axios
   .get('http://localhost:8080/Chicken')
   .then((res)=>dispatch({type : types.GET_CHICKEN_SUCCESS , payload : res.data}))
   .catch((e)=>dispatch({type : types.GET_CHICKEN_FAILURE}))

}

export const getSeaFoodData = (category) => (dispatch) =>{
   dispatch({type : types.GET_SEAFOOD_REQUEST})
   axios
   .get('http://localhost:8080/SeaFood')
   .then((res)=>dispatch({type : types.GET_SEAFOOD_SUCCESS, payload : res.data}))
   .catch((e)=>dispatch({type : types.GET_SEAFOOD_FAILURE}))

}