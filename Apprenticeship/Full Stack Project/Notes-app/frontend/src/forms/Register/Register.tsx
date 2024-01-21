const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>
          Username:
          <input type="text" placeholder="What should we call you?" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter a password" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
