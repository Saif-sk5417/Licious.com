
import * as types from './actionTypes'
import axios from 'axios'

export const getChickenData = (params, query) => async (dispatch) => {


  //console.log("Deepak", params)
  try {
    dispatch({ type: types.GET_CHICKEN_REQUEST })

    let q = "";
    for (let key in query) {
      if (key === "sort") {
        let order = query[key]
        key = "_sort"
        q += `${key}=${order}&`;
        key = "sort"
      } else if (key === "orderBy") {
        let order = query[key]
        key = "_order"
        q += `${key}=${order}&`;
        key = "orderBy"
      } else {
        q += `${key}=${query}&`;
      }
    }
    //console.log(q)

    const res = await axios.get(`https://urldata-thedpmane.vercel.app/Chicken?${q}`, params);

    dispatch({ type: types.GET_CHICKEN_SUCCESS, payload: res.data })
    //console.log(res)
  } catch (error) {

    dispatch({ type: types.GET_CHICKEN_FAILURE })
  }
};





export const updateProductInCart = (id, quantity) => async (dispatch) => {
  //console.log(id, quantity)
  try {
    dispatch({ type: types.UPDATE_CART_REQUEST });
    dispatch({
      type: types.UPDATE_CART_SUCCESS,
      payload: {
        quantity,
        id
      },
    });

    axios.patch(`https://urldata-thedpmane.vercel.app/cart/${id}`, {
      quantity: quantity
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: types.UPDATE_CART_FAILURE
    });
  }
};

export const AddProductQuantity = (value) => async (dispatch) => {

  try {
    const res = await fetch(`https://urldata-thedpmane.vercel.app/cart`, {
      method: "POST",
      body: JSON.stringify(
        value,
      ),
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    //console.log(data)
  } catch (error) { console.log(error) }
}

export const getCart = (category) => (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST })
  axios
    .get('https://urldata-thedpmane.vercel.app/cart')
    .then((res) => dispatch({ type: types.GET_CART_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.GET_CART_FAILURE }))

}


export const removeProductFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.REMOVE_FROM_CART_REQUEST });

    const res = await fetch(`https://urldata-thedpmane.vercel.app/cart/${id}`, {
      method: "DELETE",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();

    dispatch({
      type: types.REMOVE_FROM_CART_SUCCESS,
      payload: {
        id,
        message: data.message,
      },
    });
  } catch (error) {
    dispatch({
      type: types.REMOVE_FROM_CART_FAILURE,
      payload: { message: error.message },
    });
  }
};













export const getSeaFoodData = (category) => (dispatch) => {
  dispatch({ type: types.GET_SEAFOOD_REQUEST })
  axios
    .get('http://localhost:8080/SeaFood')
    .then((res) => dispatch({ type: types.GET_SEAFOOD_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.GET_SEAFOOD_FAILURE }))
}

