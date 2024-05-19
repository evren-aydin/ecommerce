// authActions.jsx
import api from "../../api/baseUrlApi";
import { setUser } from "./clientActions";
import axios from "axios";
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
    // const token = localStorage.getItem("Authorization");
    //  if(token === null) {
    //     // Örnek bir giriş veya kayıt sayfasına yönlendirme yapılabilir
    //     alert('Lütfen giriş yapınız veya kayıt olunuz.');
    // } else {

    // }
  };
};

const setTokenToAxiosHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
};

const removeTokenFromAxiosHeader = () => {
  delete axios.defaults.headers.common["Authorization"];
};

export const verifyTokenAndAutoLogin = async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.get("/verify", {
      headers: { Authorization: token },
    });
    const user = response.data;
    console.log(user);
    // Kullanıcı bilgileri reducer'a yerleştirilir
    dispatch(setUser(user));

    // Token yenilenir
    localStorage.setItem("token", token);

    // Axios başlığına token eklenir
    setTokenToAxiosHeader(token);
  } catch (error) {
    console.error("Token verification error:", error);

    // Token doğrulanamazsa, localStorage ve axios başlığındaki token silinir
    removeTokenFromAxiosHeader();
    localStorage.removeItem("token");
  }
};
