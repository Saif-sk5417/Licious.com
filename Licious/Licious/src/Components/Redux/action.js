
import * as types from './actionTypes'
import axios from 'axios'
export const getChickenData = (category) => (dispatch) => {
  dispatch({ type: types.GET_CHICKEN_REQUEST })
  axios
    .get('http://localhost:8080/Chicken')
    .then((res) => dispatch({ type: types.GET_CHICKEN_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.GET_CHICKEN_FAILURE }))

}



export const AddProductQuantity = (id, quantity) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/Chicken/${id}`, {
      quantity: quantity + 1
    })
    .then((res) => {
      dispatch({
        type: types.ADD_PRODUCTS_QUANTITY,
        payload: res.data
      })
    })
}
export const SubProductQuantity = (id, quantity) => (dispatch) => {
  axios
    .patch(`http://localhost:8080/Chicken/${id}`, {
      quantity: quantity - 1
    })
    .then((res) => {
      dispatch({
        type: types.ADD_PRODUCTS_QUANTITY,
        payload: res.data
      })
    })
}











export const getSeaFoodData = (category) => (dispatch) => {
  dispatch({ type: types.GET_SEAFOOD_REQUEST })
  axios
    .get('http://localhost:8080/SeaFood')
    .then((res) => dispatch({ type: types.GET_SEAFOOD_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.GET_SEAFOOD_FAILURE }))
}

