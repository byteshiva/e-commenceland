import { FETCH_ORDERS, FETCH_PROFILE } from "./types";

export const fetchOrders = () => dispatch => {
  fetch(" https://api.myjson.com/bins/1f2eri")
    .then(res => res.json())
    .then(orders => {
      dispatch({
        type: FETCH_ORDERS,
        payload: orders,
        orders: orders.orders
      });
    });
};

export const fetchProfile = () => dispatch => {
  fetch(" https://api.myjson.com/bins/1f2eri")
    .then(res => res.json())
    .then(orders => {
      delete orders["orders"];
      dispatch({
        type: FETCH_PROFILE,
        payload: orders
      });
    });
};
