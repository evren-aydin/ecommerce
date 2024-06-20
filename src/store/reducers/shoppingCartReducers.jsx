import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  INCREASE_COUNT,
  DECREASE_COUNT,
  REMOVE_PRODUCT,
  TOGGLE_PRODUCT_SELECTION,
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
    case SET_CART: {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].count += action.payload.count;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }
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
    case INCREASE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case DECREASE_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload && item.count > 1
            ? { ...item, count: item.count - 1 }
            : item
        ),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case TOGGLE_PRODUCT_SELECTION:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
