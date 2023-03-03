import React from "react";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, handleForm, collectForm } = useAppContext();
  return (
    <div className="pt-20 px-10 md:w-9/12 lg:w-1/2">
      <p className="text-2xl font-bold">FORM</p>
      <form action="">
        <div className="mb-5 relative md:mb-10 md:mt-5">
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleForm}
            required
            className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-xl font-bold"
          />
          <label
            htmlFor="name"
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            Name
          </label>
        </div>
        <div className="mb-5 relative md:mb-10">
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleForm}
            required
            className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-xl font-bold"
          />
          <label
            htmlFor="email"
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            email
          </label>
        </div>
        <div className="mb-5 relative md:mb-10">
          <input
            type="tel"
            name="number"
            id="number"
            value={data.number}
            onChange={handleForm}
            required
            className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-xl font-bold"
          />
          <label
            htmlFor="number"
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            number
          </label>
        </div>
        <div className="text-left mb-5 md:mb-10">
          <p>choose your gender</p>
          <input
            type="radio"
            name="gender"
            id="female"
            value={data.gender}
            onChange={handleForm}
          />
          <label
            htmlFor="female"
            // className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            Female
          </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value={data.gender}
            onChange={handleForm}
            required
            // className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-xl font-bold"
          />
          <label
            htmlFor="male"
            // className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            Male
          </label>
        </div>
        <div className="mb-5 relative md:mb-10">
          <input
            type="text"
            name="genotype"
            id="genotype"
            value={data.genotype}
            onChange={handleForm}
            required
            className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-xl font-bold"
          />
          <label
            htmlFor="genotype"
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            Genotype
          </label>
        </div>
        <div className="mb-5 relative md:mb-10">
          <input
            type="text"
            name="blood"
            id="blood"
            value={data.blood}
            onChange={handleForm}
            required
            className="w-full border-b border-black text-base py-2 focus:outline-none peer md:text-xl font-bold"
          />
          <label
            htmlFor="blood"
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 md:peer-focus:-translate-y-7 peer-valid:-translate-y-5 md:peer-valid:-translate-y-7 md:text-xl font-semibold"
          >
            Blood group
          </label>
        </div>
        <Link to="/dashboard">
          <button
            onClick={() => collectForm()}
            className="bg-black text-white text-lg font-bold py-2 px-4 rounded-b-lg"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
