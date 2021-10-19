import React from "react";
import firebaseInit from "../../Firebase/firebase.init";

const handleRegistration = (e) => {
  console.log("reg");
  e.preventDefault();
};

const LoginRegister = () => {
  return (
    <div className="container">
      <form onSubmit={handleRegistration} className="mb-2 text-start">
        <div className="form-group">
          <label className="d-block my-1 text-start" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="my-1 text-start px-2 rounded-0 w-100 outline-none"
          />
        </div>
        <div className="form-group">
          <label className="d-block my-1 text-start" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            className="my-1 text-start px-2 rounded-0 w-100 outline-none"
          />
        </div>
        <input
          className="btn-primary my-2 px-3 py-2 border-0 rounded-1"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default LoginRegister;
