import { FETCH_ORDERS, FETCH_PROFILE } from "../actions/types";

const initialState = {
  profile:{}, 
  orders: [] 
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        profile: "",
        orders: action.payload.orders
      };
    case FETCH_PROFILE:
      console.log("action",action);
      console.log(process.env);
      return {
        ...state,
        profile: action.payload
      };      
    default:
      return state;
  }
}
