import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsersContext from "./context/UserContext";
const Nav = () => {
  const { login, logOutHandler } = useContext(UsersContext);
  const navigate = useNavigate();

  const onLogOut = function () {
    logOutHandler();
    navigate("/");
  };
  return (
    <nav className="flex justify-between py-3 px-4 absolute w-full top-0 z-50 ">
      <Link to="/">
        <h1 className="text-3xl text-red-600 font-bold uppercase">netflix</h1>
      </Link>
      {!login ? (
        <div className="text-white text-sm flex gap-3 font-medium">
          <button>
            <Link to="login">Sign In</Link>
          </button>

          <button className="bg-red-600 px-4 py-[2px] rounded  ">
            <Link to="signup">Sign Up</Link>
          </button>
        </div>
      ) : (
        <div className="text-white text-sm flex gap-3 font-medium">
          <button>
            <Link to="account">Account</Link>
          </button>

          <button
            onClick={onLogOut}
            className="bg-red-600 px-4 py-[2px] rounded  ">
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
