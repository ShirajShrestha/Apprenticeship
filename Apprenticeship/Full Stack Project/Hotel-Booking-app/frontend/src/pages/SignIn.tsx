import { useForm } from "react-hook-form";
import "../styles/signIn.css";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SingInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SingInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="sign-in-wrapper " onSubmit={onSubmit}>
      <h2 className="sign-in-text">Sign In</h2>

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
      <span className="register-or-submit">
        <span className="register-text">
          Not Registered?{" "}
          <Link to="/register" className="register-link">
            Create an Account
          </Link>
        </span>
        <button className="btn bg-blue-700" type="submit">
          Sign In
        </button>
      </span>
    </form>
  );
};

export default SignIn;
