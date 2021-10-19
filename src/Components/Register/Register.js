import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const {
    registerUsingEmailAndPassword,
    handleEmail,
    handlePassword,
    signInUsingGoogle,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="my-5">
      <h2 className="py-2 d-block">
        Please <span className="text-primary">Register</span>
      </h2>

      <form>
        <div className="form-group d-flex flex-column w-50 mx-auto">
          <label htmlFor="email" className="d-block text-start">
            Email:
          </label>
          <input
            type="email"
            className="d-block mb-2"
            placeholder="Enter your email..."
            onChange={handleEmail}
            required
          />
        </div>
        <div className="form-group d-flex flex-column w-50 mx-auto">
          <label htmlFor="password" className="d-block text-start">
            Password:
          </label>
          <input
            type="password"
            className="d-block"
            placeholder="Enter your password..."
            onChange={handlePassword}
            required
          />
        </div>
        <input
          type="submit"
          onClick={registerUsingEmailAndPassword}
          className="btn-primary rounded-1 border-0 me-auto mt-3 px-3 py-1"
          value="Register"
        />
      </form>

      <div className="py-2">Or</div>
      <button
        onClick={handleGoogleLogin}
        className="btn-primary fs-5 border-0 py-1 px-3 rounded-1"
      >
        Google Sign In
      </button>
      <Link
        to="/login"
        className="d-block my-4 text-decoration-none text-danger fs-6"
      >
        Already Registered? Please Login
      </Link>
    </div>
  );
};

export default Register;
