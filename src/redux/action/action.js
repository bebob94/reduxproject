export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export const addToCartAction = (productSelected) => ({
  type: ADD_TO_CART,
  payload: productSelected,
});

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_CART,
  payload: i,
});

export const actionFetch = () => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      if (response.ok) {
        let data = await response.json();

        dispatch({
          type: GET_PRODUCTS,
          payload: data.products,
        });
      } else {
        dispatch({
          type: GET_PRODUCTS_ERROR,
        });
      }
    } catch (error) {
      alert(error);
      dispatch({
        type: GET_PRODUCTS_ERROR,
      });
    }
  };
};