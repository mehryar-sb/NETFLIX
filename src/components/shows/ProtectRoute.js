import React, { useContext, useEffect } from "react";
import UsersContext from "./../context/UserContext";
import { useNavigate } from "react-router-dom";

const ProtectRoute = (props) => {
  const { login } = useContext(UsersContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate("/");
  }, [login]);

  return <div>{props.children}</div>;
};

export default ProtectRoute;
