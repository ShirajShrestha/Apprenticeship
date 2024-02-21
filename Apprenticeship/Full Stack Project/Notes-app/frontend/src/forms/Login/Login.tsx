import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import * as apiClient from "../../api-client";
// import Register from "../Register/Register";

export type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const mutation = useMutation(apiClient.logIn, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <h1 className="text-3xl text-primary-light font-bold font-sans my-2">
          Login
        </h1>
        <form
          className="flex items-center justify-center flex-col"
          onSubmit={onSubmit}
        >
          <label className="text-primary-light font-sans font-medium my-1 flex flex-col m-2">
            Email
            <input
              type="email"
              className="p-2 rounded-lg text-primary-blue"
              placeholder="Enter your email"
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message} </span>
            )}
          </label>
          <label className="text-primary-light font-sans font-medium my-1 flex flex-col m-2">
            Password
            <input
              type="password"
              className="p-2 rounded-lg text-primary-blue"
              placeholder="Enter your password"
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
          <button
            type="submit"
            className="bg-secondary-light text-secondary-blue px-4 py-2 my-4 rounded-xl font-bold"
          >
            Submit
          </button>
          <p className="text-primary-light">
            Don't have an account?{" "}
            <span className="font-bold text-secondary-light cursor-pointer">
              <Link to="/register">Register now!</Link>
            </span>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
