// authActions.jsx
import api from "../api/baseUrlApi";
import { setUser } from "./clientActions";

export const loginUser = (
  userData,
  history,
  rememberMe,
  toastError,
  toastSuccess,
  setLoading
) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      const response = await api.post("/login", userData);
      const user = response.data;
      if (
        user.role_id === "1" ||
        user.role_id === "2" ||
        user.role_id === "3"
      ) {
        toastSuccess();

        dispatch(setUser(user)); // dispatch ile setUser'ı çağırın
        setTimeout(() => {
          history.push("/");
        }, 5000);
        console.log("Kullanıcı başarılı şekilde giriş yaptı");
        if (user.token.length !== 0 && rememberMe === true) {
          console.log("user dolu");

          localStorage.setItem("token", user.token);
        }
      }
    } catch (error) {
      console.log("login error", error);
      toastError();
    } finally {
      setLoading(false); // işlem tamamlandığında loading durumunu false yap
    }
  };
};
