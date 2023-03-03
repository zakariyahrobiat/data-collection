import React, { useState } from "react";
import icon from "../src/assets/img/icon.png";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";
const Modal = ({ id }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const { handleDetail } = useAppContext();
  return (
    <div className="relative">
      <img src={icon} alt="" srcSet="" onClick={() => setShow(!show)} />
      {show && (
        <>
          <Link to="/users">
            <p
              onClick={() => handleDetail(id)}
              className="w-32 absolute right-0 top-0 bg-white shadow-sm"
            >
              {" "}
              View User
            </p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Modal;
