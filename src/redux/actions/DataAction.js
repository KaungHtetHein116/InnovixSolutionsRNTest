import {
  GET_CATEG,
  GET_CATEG_SUCCESS,
  GET_CATEG_FAIL,
  ON_ADD_CART,
  ON_REMOVE_CART,
  ON_CHECKOUT,
} from './types';
import axios from 'axios';

export const getCategData = () => {
  return (dispatch) => {
    dispatch({type: GET_CATEG});
    axios
      .get(`http://backend.sbbabyshop.com/product/categories`)
      .then((res) => {
        dispatch({type: GET_CATEG_SUCCESS, payload: res.data});
      })
      .catch((err) => dispatch({type: GET_CATEG_FAIL, payload: err}));
  };
};

export function onAddCart(item) {
  return (dispatch) => {
    dispatch({
      type: ON_ADD_CART,
      payload: item,
    });
  };
}
export function onRemoveCart(item) {
  return (dispatch) => {
    dispatch({
      type: ON_REMOVE_CART,
      payload: item,
    });
  };
}
export function onCheckOut() {
  return (dispatch) => {
    dispatch({
      type: ON_CHECKOUT,
    });
  };
}
