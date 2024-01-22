import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useLogIn } from "../../store";

const Register = () => {
  const loggingIn = useLogIn((state) => state.login);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen min-w-full">
        <h1 className="text-3xl text-primary-light font-bold font-sans my-2">
          Register
        </h1>
        <form className="flex items-center justify-center flex-col">
          <label className="text-primary-light font-sans font-medium my-1 flex flex-col m-2">
            Username
            <input
              type="text"
              className="p-2 rounded-lg text-primary-blue"
              placeholder="What should we call you?"
            />
          </label>
          <label className="text-primary-light font-sans font-medium my-1 flex flex-col m-2">
            Email
            <input
              type="email"
              className="p-2 rounded-lg text-primary-blue"
              placeholder="Enter your email"
            />
          </label>
          <label className="text-primary-light font-sans font-medium my-1 flex flex-col m-2">
            Password
            <input
              type="password"
              className="p-2 rounded-lg text-primary-blue"
              placeholder="Enter your password"
            />
          </label>
          <button className="bg-secondary-light text-secondary-blue px-4 py-2 my-4 rounded-xl font-bold">
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
