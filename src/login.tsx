import React from "react";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { data, handleForm, handleLogin } = useAppContext();
  return (
    <div className="pt-20 px-10 md:w-9/12 lg:w-1/2 ">
      <form action="">
        <div className="mb-5 relative md:mb-10">
          <input
            type="email"
            name="email"
            id="email"
            // placeholder="email@gmail.com"
            value={data.email}
            onChange={handleForm}
            required
            className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-xl font-bold"
          />
          <label
            htmlFor=""
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            email@gmail.com
          </label>
        </div>
        <div className="mb-5 relative md:mb-10">
          <input
            type="password"
            name="password"
            id="password"
            // placeholder="password"
            value={data.password}
            onChange={handleForm}
            required
            className="w-full border-b border-black py-2 focus:outline-none peer md:text-xl font-bold "
          />
          <label
            htmlFor=""
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            password
          </label>
        </div>
        <Link to="/home">
          <button
            type="submit"
            onClick={() => handleLogin()}
            className="bg-black text-white text-base mb-5 font-bold py-2 px-4 rounded-tl-md rounded-br-md md:text-lg"
          >
            LOGIN
          </button>
        </Link>
        <p className="text-base md:text-xl font-medium">
          Create an account{" "}
          <Link to="/" className="text-blue-700">
            SIGN IN
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
