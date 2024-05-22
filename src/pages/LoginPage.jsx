//loginPage
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arkaPlan from "/shop-hero-1.jpg";
const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const toastError = () => {
    return toast.error(
      "Oturum açma başarısız oldu. Lütfen bilgilerinizi kontrol edin."
    );
  };
  const toastSuccess = () => {
    return toast.success("Oturum açma başarılı.");
  };

  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(
      loginUser(data, history, rememberMe, toastError, toastSuccess, setLoading)
    );
  };

  return (
    <div
      className="w-full h-full font-mont flex justify-center items-center"
      style={{ backgroundImage: `url(${arkaPlan})` }}
    >
      <ToastContainer />
      <form
        className="flex pt-10 flex-col text-xl font-mont gap-4 items-center py-48"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-bold text-[#002e6b]">Email</label>
        <input
          className="border border-[#002e6b] py-3 px-5 rounded "
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            This field is required and must be a valid email address
          </span>
        )}

        <label className="font-bold text-[#002e6b]">Password</label>
        <input
          className="border border-[#002e6b] py-3 px-5 rounded"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            This field is required
          </span>
        )}
        {/* "Remember Me" checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label
            htmlFor="rememberMe"
            className="text-sm font-semibold text-[#002e6b]"
          >
            Remember Me
          </label>
        </div>
        {loading && <p>Loading...</p>}
        <button
          disabled={loading}
          className="border py-2 px-6 w-44 hover:text-[#002e6b] hover:bg-white hover:border-[#002e6b] text-white bg-[#002e6b] rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
