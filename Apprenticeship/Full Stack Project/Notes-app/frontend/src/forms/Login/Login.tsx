const Login = () => {
  return (
    <div>
      <h1 className="">Login Page</h1>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
