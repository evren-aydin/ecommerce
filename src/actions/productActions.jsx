// actions/productActions.js
import api from "../api/baseUrlApi";

// Action types
export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

// Action creators
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const fetchCategories = async (dispatch) => {
  try {
    const response = await api.get("/categories");
    const categories = response.data;

    // Kategorileri rating'e göre azalan sırada sıralayın
    const sortedCategories = categories.sort((a, b) => b.rating - a.rating);
    // En yüksek rating'e sahip ilk 5 kategoriyi alın
    const topCategories = sortedCategories.slice(0, 5);

    // kategoriler bilgisini ve en yüksek puanlı kategorileri reducer'a yerleştirin
    dispatch(setCategories({ categories, topCategories }));
  } catch (error) {
    console.error("Categories error:", error);
  }
};

export const fetchProducts = async (dispatch) => {
  try {
    const response = await api.get("/products");
    const products = response.data;

    const total = products.total;
    dispatch(setProductList(products));
    dispatch(setTotal(total));
  } catch (error) {
    console.error("Products error:", error);
  }
};
