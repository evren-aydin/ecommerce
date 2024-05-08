//actions/thunkActions.jsx
// Action types
export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";

// Action creators
export const fetchRolesRequest = () => ({
  type: FETCH_ROLES_REQUEST,
});

export const fetchRolesSuccess = (roles) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: roles,
});

export const fetchRolesFailure = (error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: error,
});

// Thunk action creator
export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  const { client } = getState(); //Mevcut durumu al
  const { roles } = client;

  if (roles.length === 0) {
    // Rollerin önceden getirilip getirilmediğini kontrol edin
    dispatch(fetchRolesRequest()); // Dispatch request action
    try {
      // Simulate fetching roles from an API - Bir API'den rol alma simülasyonu yapın
      const fetchedRoles = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(["admin", "user", "guest"]); // Sample roles
        }, 1000); // Simulate delay of 1 second
      });
      dispatch(fetchRolesSuccess(fetchedRoles)); // Dispatch success action with fetched roles - Başarı eylemini getirilen rollerle gönderme
    } catch (error) {
      dispatch(fetchRolesFailure(error)); // Dispatch failure action with error - Hatalı gönderim hatası eylemi
    }
  }
};
