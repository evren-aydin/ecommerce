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
    // Store ile ilgili verileri bir nesne içinde toplayın
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
      history.push("/"); // Kullanıcıyı önceki sayfaya yönlendirin
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
    setLoading(false);
    reset(); // Formu sıfırlayın
  };

  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          className="border rounded-md"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && (
          <span>Name is required and must be at least 3 characters long</span>
        )}

        <label>Email:</label>
        <input
          className="border rounded-md"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Email is required and must be valid</span>}

        <label>Password:</label>
        <input
          className="border rounded-md"
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          })}
        />
        {errors.password && (
          <span>
            Password is required and must be at least 8 characters long,
            including numbers, lowercase, uppercase, and special characters
          </span>
        )}

        <label>Confirm Password:</label>
        <input
          className="border rounded-md"
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
        />
        {errors.confirmPassword && <span>Passwords do not match</span>}

        <label>Role:</label>
        <select {...register("role_id")}>
          {roles.map((role) => (
            <option key={role.id} value={role.id} selected={role.id === 3}>
              {role.name}
            </option>
          ))}
        </select>

        {watch("role_id") === "2" && (
          <>
            <label>Store Name:</label>
            <input
              className="border rounded-md"
              {...register("storeName", { required: true, minLength: 3 })}
            />
            {errors.storeName && (
              <span>
                Store name is required and must be at least 3 characters long
              </span>
            )}

            {/* Add other fields for store */}
            <label>Store Phone:</label>
            <input
              className="border rounded-md"
              {...register("storePhone", {
                required: true,
                pattern:
                  /(^[0\s]?[\s]?)([(]?)([5])([0-9]{2})([)]?)([\s]?)([0-9]{3})([\s]?)([0-9]{2})([\s]?)([0-9]{2})$/g,
              })}
            />
            {errors.storePhone && (
              <span>Phone number is required and must be valid</span>
            )}

            <label>Store Tax ID:</label>
            <input
              className="border rounded-md"
              {...register("storeTax_no", {
                required: true,
                pattern: /^T\d{4}V\d{6}$/,
              })}
            />
            {errors.storeTax_no && (
              <span>
                Tax ID is required and must match the pattern TXXXXVXXXXXX
              </span>
            )}

            <label>Store Bank Account:</label>
            <input
              className="border rounded-md"
              {...register("storeBank_account", {
                required: true,
                pattern:
                  /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/,
              })}
            />
            {errors.storeBank_account && (
              <span>
                Bank account is required and must be valid IBAN address
              </span>
            )}
          </>
        )}

        <button
          className="border py-2 px-6 border-blue-500 rounded-md"
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
