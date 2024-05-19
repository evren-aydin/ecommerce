// reducers/productReducer.js

import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from "../actions/productActions";

// Initial state
const initialState = {
  categories: [],
  topCategories: [],
  productList: [],
  total: 0, //toplam ürün sayısı
  limit: 25, //sayfada default olarak 25 ürün sayısı
  offset: 0, // sayfalandırma için defaul olarak 0
  filter: "",
  fetchState: "NOT_FETCHED",
};

// Reducer function
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        topCategories: action.payload.topCategories, // Top 5 categories
      };
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    // Add more cases if needed for other actions

    default:
      return state;
  }
};

export default productReducer;
