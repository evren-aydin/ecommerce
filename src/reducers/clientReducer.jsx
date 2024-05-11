//reducers/clientReducer.jsx
import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../actions/clientActions";
const initialState = {
  user: {}, //kullanıcı hakkında her şey
  addressList: [], //kullanıcının adres listesi
  creditCards: [], // kullanıcının kredi kartı listesi
  roles: [],
  theme: "",
  language: "",
};
const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
