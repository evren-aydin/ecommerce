import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/baseUrlApi";
import { useHistory } from "react-router-dom";
const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const history = useHistory();
  useEffect(() => {
    api
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    // Store ile ilgili verileri bir nesne içinde topla
    if (data.role_id === "2") {
      data.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTax_no,
        bank_account: data.storeBank_account,
      };
    } else {
      delete data.storeName;
      delete data.storePhone;
      delete data.storeTax_no;
      delete data.storeBank_account;
    }
    delete data.confirmPassword;
    console.log("Gönderilecek veriler:", data);
    try {
      const response = await api.post("/signup", data);
      console.log(response.data);
      alert("You need to click link in email to activate your account!");
      history.goBack(); // Kullanıcıyı önceki sayfaya yönlendirin
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
    setLoading(false);
    reset(); // Formu sıfırlayın
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form
        className="flex pt-10 flex-col text-xl font-mont gap-4 items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-bold">Name</label>
        <input
          className="border border-black py-2 px-5"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            Name is required and must be at least 3 characters long
          </span>
        )}

        <label className="font-bold">Email</label>
        <input
          className="border border-black py-2 px-5"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            Email is required and must be valid
          </span>
        )}

        <label className="font-bold">Password</label>
        <input
          className="border border-black py-2 px-5"
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          })}
        />
        {errors.password && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            Password is required and must be at least 8 characters long,
            including numbers, lowercase, uppercase, and special characters
          </span>
        )}

        <label className="font-bold">Confirm Password</label>
        <input
          className="border border-black py-2 px-5"
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
        />
        {errors.confirmPassword && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            Passwords do not match
          </span>
        )}
        <div className="flex gap-2 items-center">
          <label className="font-bold">Role : </label>
          <select className="border px-5 py-1" {...register("role_id")}>
            {roles.map((role) => (
              <option key={role.id} value={role.id} selected={role.id === 3}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {watch("role_id") === "2" && (
          <>
            <label className="font-bold">Store Name:</label>
            <input
              className="border border-black py-2 px-5"
              {...register("storeName", { required: true, minLength: 3 })}
            />
            {errors.storeName && (
              <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
                Store name is required and must be at least 3 characters long
              </span>
            )}

            {/* Add other fields for store */}
            <label className="font-bold">Store Phone:</label>
            <input
              className="border border-black py-2 px-5"
              {...register("storePhone", {
                required: true,
                pattern:
                  /(^[0\s]?[\s]?)([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
              })}
            />
            {errors.storePhone && (
              <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
                Phone number is required and must be valid
              </span>
            )}

            <label className="font-bold">Store Tax ID:</label>
            <input
              className="border border-black py-2 px-5"
              {...register("storeTax_no", {
                required: true,
                pattern: /^T\d{4}V\d{6}$/,
              })}
            />
            {errors.storeTax_no && (
              <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
                Tax ID is required and must match the pattern TXXXXVXXXXXX
              </span>
            )}

            <label className="font-bold">Store Bank Account:</label>
            <input
              className="border border-black py-2 px-5"
              {...register("storeBank_account", {
                required: true,
                pattern:
                  /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/,
              })}
            />
            {errors.storeBank_account && (
              <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
                Bank account is required and must be valid IBAN address
              </span>
            )}
          </>
        )}

        <button
          className="border py-2 px-6 w-44 hover:text-blue-400 hover:bg-white hover:border-blue-400 text-white bg-blue-400 rounded-md"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="spinner">Loading...</div> // Spinner ekleyin
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
