import { isAxiosError } from 'axios'
import * as types from './actionTypes'
const initialState = {
    isLoading: false,
    carIsLoading: false,
    ChickenData: [],
    SeaFoodData: [],
    cart: [],
    isError: false
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.GET_CHICKEN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_CHICKEN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                ChickenData: payload
            }
        case types.GET_CHICKEN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_SEAFOOD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_SEAFOOD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                SeaFoodData: payload
            }
        case types.GET_SEAFOOD_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case types.GET_CART_REQUEST:
            return {
                ...state,
                carIsLoading: true
            }
        case types.GET_CART_SUCCESS:
            return {
                ...state,
                carIsLoading: false,
                cart: payload
            }
        case types.GET_CART_FAILURE:
            return {
                ...state,
                carIsLoading: false,
                isError: true
            }

        case types.UPDATE_CART_REQUEST:
            return {
                ...state,
                carIsLoading: true,
                isError: false,
            };
        case types.UPDATE_CART_SUCCESS:
            return {
                ...state,
                carIsLoading: false,
                isError: false,
                cart: state.cart.map((cart) => {
                    if (cart.id === payload.id) {
                        cart.quantity = payload.quantity;
                        return cart;
                    }
                    return cart;
                })
            };

        case types.UPDATE_CART_FAILURE:
            return {
                ...state,
                carIsLoading: false,
                isError: true,
            };
        case types.REMOVE_FROM_CART_REQUEST:
            return {
                ...state,
                carIsLoading: true,
                isError: false,
            };
        case types.REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                carIsLoading: false,
                isError: false,
                cart: state.cart.filter((cart) => cart._id !== payload.id),

            };
        case types.REMOVE_FROM_CART_FAILURE:
            return {
                ...state,
                carIsLoading: false,
                isError: true,
            };

        case types.ADD_PRODUCTS_QUANTITY:
            const { id, quantity } = payload
            // console.log({ id, quantity })
            const newPatchData = state.ChickenData.map((el) => el.id === id ? { ...el, quantity } : el)
            return {
                ...state,
                ChickenData: newPatchData,
                isError: false,
            };
        default:
            return state
    }
}

export { reducer }