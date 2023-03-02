import React, { useState } from "react";
import icon from "../src/assets/img/icon.png";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";
const Modal = ({ id }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const { handleDetail } = useAppContext();
  return (
    <div>
      <img src={icon} alt="" srcSet="" onClick={() => setShow(!show)} />
      {show && (
        <>
          <Link to="/users">
            <p onClick={() => handleDetail(id)}> View User</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Modal;
