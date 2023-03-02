import React, { useState } from "react";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { data, handleForm, handleSignIn } = useAppContext();

  return (
    <div className="pt-20 px-10 md:w-9/12 lg:w-1/2 my-100px">
      <form action="" className="">
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
            className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-lg "
          />
          <label
            htmlFor=""
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            password
          </label>
        </div>
        {data.password.length > 7 ? (
          <Link to="/home">
            <button
              type="submit"
              onClick={() => handleSignIn()}
              className=" mb-5 bg-black text-white text-base font-bold py-2 px-4 rounded-tl-md rounded-br-md"
            >
              SIGN IN
            </button>
          </Link>
        ) : (
          <button
            type="submit"
            // onClick={handleSignIn}
            // disabled={button ? true : false}
            className="mb-5 bg-black text-white text-base py-2 px-4 rounded-tl-md rounded-br-md hover:translate-x-5 duration-50 hover:animate-spin"
          >
            <p> SIGN IN</p>
          </button>
        )}
        <p className="text-base md:text-xl font-medium">
          Already have an account{" "}
          <Link to="/login" className="text-blue-700">
            LOGIN
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
