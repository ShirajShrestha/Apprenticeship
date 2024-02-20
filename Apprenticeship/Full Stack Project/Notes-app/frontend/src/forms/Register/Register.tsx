import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useLogIn } from "../../store";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";

export type RegisterFormData = {
  userName: string;
  email: string;
  password: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
    },
    onError: (error: Error) => {
      // showToast({ message: error.message, type: "ERROR" });
      console.log(error);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const loggingIn = useLogIn((state) => state.login);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <h1 className="text-3xl text-primary-light font-bold font-sans my-2">
          Register
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex items-center justify-center flex-col"
        >
          <label className="text-primary-light font-sans font-medium my-1 flex flex-col m-2">
            Username
            <input
              type="text"
              className="p-2 rounded-lg text-primary-blue"
              placeholder="What should we call you?"
              {...register("userName", {
                required: "This field is required",
              })}
            />
            {errors.userName && (
              <span className="text-red-500">{errors.userName.message} </span>
            )}
          </label>
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
          <p className="text-primary-light ">
            Already have an account?{" "}
            <span
              className="font-bold text-secondary-light cursor-pointer"
              onClick={() => loggingIn}
            >
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
