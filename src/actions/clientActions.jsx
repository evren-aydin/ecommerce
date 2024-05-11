//actions/clientActions.jsx

import api from "../api/baseUrlApi";

// Action types
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

// Action creators
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
export const fetchRoles = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;

    //Roller zaten mağazada mevcutsa tekrar getirmenize gerek yoktur
    if (roles.length > 0) return;

    try {
      const fetchedRoles = await fetch(api + "/roles");
      const rolesData = await fetchedRoles.json();

      // Mağazadaki rolleri ayarlamak için eylem gönderme
      dispatch(setRoles(rolesData));
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
};
