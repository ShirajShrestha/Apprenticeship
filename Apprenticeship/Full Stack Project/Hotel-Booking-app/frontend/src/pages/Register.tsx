import { useForm } from "react-hook-form";
import "../styles/register.css";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Successful", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <>
      <form className="form-container" onSubmit={onSubmit}>
        <h2 className="title-text">Create an Account</h2>
        <div className="name-wrapper">
          <label htmlFor="first-name" className="user-input first-name flex-1">
            First Name
            <input
              type="text"
              className="name-input"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message} </span>
            )}
          </label>
          <label htmlFor="last-name" className="user-input last-name flex-1">
            Last Name
            <input
              type="text"
              className="name-input"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message} </span>
            )}
          </label>
        </div>
        <label htmlFor="email" className="user-input email">
          Email
          <input
            type="email"
            className="name-input "
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message} </span>
          )}
        </label>
        <label htmlFor="password" className="user-input password">
          Password
          <input
            type="password"
            className="name-input "
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must be atleast 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message} </span>
          )}
        </label>
        <label
          htmlFor="confirm-password"
          className="user-input confirm-password"
        >
          Confirm Password
          <input
            type="password"
            className="name-input "
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required";
                } else if (watch("password") !== val) {
                  return "Your password do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}{" "}
            </span>
          )}
        </label>
        <span>
          <button className="btn bg-blue-700" type="submit">
            Create Account
          </button>
        </span>
      </form>
    </>
  );
};

export default Register;
