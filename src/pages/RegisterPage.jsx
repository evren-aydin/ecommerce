import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/baseUrlApi";
import { useNavigate } from "react-router-dom";
import contactArkaplan from "/contact-background.png";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
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
      navigate(-1); // Kullanıcıyı önceki sayfaya yönlendirin
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
    setLoading(false);
    reset(); // Formu sıfırlayın
  };

  return (
    <div
      className="w-full h-full bg-cover  items-center flex "
      style={{
        backgroundImage: `url(${contactArkaplan})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <form
        className="flex flex-col text-xl font-mont pl-96 gap-4 py-9 items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-bold text-2xl text-[#4a5581]">Name</label>
        <input
          className="border border-[#1a3f36] py-3 px-12 rounded"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            Name is required and must be at least 3 characters long
          </span>
        )}

        <label className="font-bold text-2xl text-[#4a5581]">Email</label>
        <input
          className="border border-[#1a3f36] py-3 px-12 rounded"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
            Email is required and must be valid
          </span>
        )}

        <label className="font-bold text-2xl text-[#4a5581]">Password</label>
        <input
          className="border border-[#1a3f36] py-3 px-12 rounded"
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

        <label className="font-bold text-2xl text-[#4a5581]">
          Confirm Password
        </label>
        <input
          className="border border-[#1a3f36] py-3 px-12 rounded"
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
          <label className="font-bold text-2xl text-[#4a5581]">Role : </label>
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
            <label className="font-bold text-2xl text-[#4a5581]">
              Store Name:
            </label>
            <input
              className="border border-[#1a3f36] py-3 px-12 rounded"
              {...register("storeName", { required: true, minLength: 3 })}
            />
            {errors.storeName && (
              <span className="pl-4 text-xs text-red-500 font-semibold w-[310px]">
                Store name is required and must be at least 3 characters long
              </span>
            )}

            {/* Add other fields for store */}
            <label className="font-bold text-2xl text-[#4a5581]">
              Store Phone:
            </label>
            <input
              className="border border-[#1a3f36] py-3 px-12 rounded"
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

            <label className="font-bold text-2xl text-[#4a5581]">
              Store Tax ID:
            </label>
            <input
              className="border border-[#1a3f36] py-3 px-12 rounded"
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

            <label className="font-bold text-2xl text-[#4a5581]">
              Store Bank Account:
            </label>
            <input
              className="border border-[#1a3f36] py-3 px-12 rounded"
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
          className="border mt-6 py-4 w-56 hover:text-[#4a5581] hover:bg-white hover:border-[#4a5581] text-white bg-[#4a5581] rounded-md"
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

export default RegisterPage;
