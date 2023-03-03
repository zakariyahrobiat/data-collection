import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./context";
const Users = () => {
  const { detail } = useAppContext();
  console.log(detail.detail.data);
  const { id, name, email, number, genotype, blood, gender } =
    detail.detail.data;
  console.log(number);

  return (
    <div className="py-5 md:w-9/12 lg:w-1/2 ">
      <div className="text-left mb-5">
        <Link
          to="/dashboard"
          className=" bg-black text-white px-4 py-2  text-lg font-bold rounded"
        >
          back
        </Link>
      </div>
      <div className="p-5 ">
        <p className="text-2xl font-bold pb-3">PERSONAL INFORMATION</p>
        <div className="">
          <div className="flex justify-items-start text-xl font-semibold gap-5">
            <p className="">full Name:</p>
            <p className="">{name}</p>
          </div>
          <div className="flex justify-items-start text-xl font-semibold gap-5">
            <p>Email:</p>
            <p>{email}</p>
          </div>
          <div className="flex justify-items-start text-xl font-semibold gap-5">
            <p>Phone Number:</p>
            <p>{number}</p>
          </div>
          <div className="flex justify-items-start text-xl font-semibold gap-5">
            <p>Gender:</p>
            <p>{gender}</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-2xl font-bold">MEDICAL INFORMATION</p>
        <div>
          <div className="flex justify-items-start text-xl font-semibold gap-5">
            <p>Blood group:</p>
            <p>{blood}</p>
          </div>
          <div className="flex justify-items-start text-xl font-semibold gap-5">
            <p>Genotype:</p>
            <p>{genotype}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
