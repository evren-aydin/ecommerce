import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

// Initial state
const initialState = {
  cart: [], //ürünlerin satın alınmasını sürdürecek
  //   örneğin;
  //     [
  //       {  count: 1, product: { id: “1235”, … }  },
  //       {  count: 3, product: { id: “1236”, … }  },
  //   ]
  payment: {}, // ödeme bilgilerini saklayacak
  address: {}, // adres bilgilerini tutacak
};

// Reducer function
const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    // Add more cases if needed for other actions

    default:
      return state;
  }
};

export default shoppingCartReducer;
