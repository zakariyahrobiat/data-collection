import React from "react";
import { useAppContext } from "./context";

import Modal from "./modal";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { collect, start, end, increase, decrease } = useAppContext();
  // if (collect.length === 0) {
  //   return null;
  // }
  console.log(collect);

  return (
    <div className="py-5">
      {/* <div className="flex justify-between gap-5 items-center "> */}
      <div className="text-left mb-5">
        <Link
          to="/home"
          className=" bg-black text-white px-4 py-2  text-lg font-bold rounded"
        >
          Back
        </Link>
      </div>
      <div className="mx-5 bg-black text-white px-4 py-2 text-2xl font-bold rounded">
        <p>users</p>
        <p>{collect.length}</p>
      </div>
      {/* </div> */}
      <div className="py-5">
        {collect.slice(start, end)?.map((data: any) => {
          const { name, email, id, number, gender, genotype, blood } =
            data.data;
          return (
            <div>
              <div key={id} className="flex justify-between items-center px-5 ">
                <p className="py-2 text-base font-medium">{name}</p>
                {/* <p>{email}</p> */}
                <p className="py-2 text-base font-medium">{number}</p>

                <Modal {...data} />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      {/* <div className="">
        <p>
          showing {end} of {collect.length}
        </p>

        <button onClick={decrease}>DEC</button>
        <button onClick={increase}>ADD</button>
      </div> */}
    </div>
  );
};

export default Dashboard;
