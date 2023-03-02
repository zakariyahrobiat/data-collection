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
    <div>
      <Link to="/dashboard">
        <p>back</p>
      </Link>

      <p>PERSONAL INFORMATION</p>
      <div>
        <div>
          <p>full Name</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{email}</p>
        </div>
        <div>
          <p>Phone Number</p>
          <p>{number}</p>
        </div>
        <div>
          <p>Gender</p>
          <p>{gender}</p>
        </div>
      </div>
      <div>
        <p>MEDICAL INFORMATION</p>
        <div>
          <div>
            <p>Blood group</p>
            <p>{blood}</p>
          </div>
          <div>
            <p>Genotype</p>
            <p>{genotype}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
