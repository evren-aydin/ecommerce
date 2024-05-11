import { useForm } from "react-hook-form";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        className="flex pt-10 flex-col text-xl font-mont gap-4 items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-bold">Email:</label>
        <input
          className="border border-black py-2 px-5"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            This field is required and must be a valid email address
          </span>
        )}

        <label className="font-bold">Password:</label>
        <input
          className="border border-black py-2 px-5"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            This field is required
          </span>
        )}

        <button
          className="border py-2 px-6 w-44 hover:text-blue-400 hover:bg-white hover:border-blue-400 text-white bg-blue-400 rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
