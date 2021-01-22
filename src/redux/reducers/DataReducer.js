import {
  GET_CATEG,
  GET_CATEG_SUCCESS,
  GET_CATEG_FAIL,
  ON_ADD_CART,
  ON_REMOVE_CART,
  ON_CHECKOUT,
} from '../actions/types';

const INITIAL_STATE = {
  categ: null,
  loading: false,
  error: null,
  Cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEG: {
      return {...state, loading: true};
    }
    case GET_CATEG_SUCCESS: {
      return {
        ...state,
        loading: false,
        categ: action.payload.data,
      };
    }
    case GET_CATEG_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case ON_ADD_CART: {
      const existingItem = state.Cart.filter(
        (item) => item.id === action.payload.id,
      );

      if (existingItem.length > 0) {
        let updatedCart = state.Cart.map((item) => {
          if (item.id === action.payload.id) {
            item.unit = action.payload.unit;
          }
          return item;
        });

        return {
          ...state,
          Cart: updatedCart.filter((item) => item.unit > 0),
        };
      } else {
        return {
          ...state,
          Cart: [...state.Cart, action.payload],
        };
      }
    }
    case ON_REMOVE_CART: {
      return {
        ...state,
        Cart: state.Cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case ON_CHECKOUT: {
      return {
        ...state,
        Cart: [],
      };
    }
    default:
      return state;
  }
};
