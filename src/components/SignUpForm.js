import React, { useContext, useState } from "react";
import backnet from "../data/img/backnet.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import UsersContext from "./context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const { allUsers, signUpHandler } = useContext(UsersContext);
  const [error, setError] = useState(false);
  const regex = /^[a-z\d]+(\.)?[a-z\d]+@[a-z]{2,8}\.[a-z]{2,8}$/g;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const exist = allUsers.find((user) => user.email === values.email);
      if (!exist) {
        if (!regex.test(values.email)) {
          setError(true);
          return;
        }
        const entry = { ...values, password: +values.password, shows: [] };
        signUpHandler(entry);
        navigate("/");
      }

      formik.resetForm();
    },
  });
  return (
    <section className="relative w-full">
      <div className="fixed w-full h-screen">
        <img className="w-full h-full" src={backnet} alt="" />
        <div className="absolute top-0 left-0 z-10 w-full h-screen bg-black/60 "></div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="absolute top-0 left-0 z-20 w-full h-full">
        <div className="w-11/12 h-[430px] md:w-[400px] md:h-[480px] mt-20 bg-black/75 mx-auto px-8 md:px-16 py-10 ">
          <h1 className="text-2xl font-bold text-white">Sign Up</h1>
          {error && (
            <p className="w-full px-5 py-3 mt-3 text-white bg-red-300">
              email is invalid
            </p>
          )}
          <div className="flex flex-col gap-3 mt-5">
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form"
              placeholder="Email"
            />
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form"
              placeholder="Password"
            />
            <button
              type="submit"
              className="py-2 mt-3 text-base font-semibold bg-red-600 rounded ">
              Sign Up
            </button>
          </div>
          <div className="flex justify-between mt-5 text-sm text-gray-700">
            <p>
              <input type="checkbox" /> Remember me
            </p>
            <p className="cursor-pointer hover:underline">Need Help?</p>
          </div>
          <div className="text-sm font-semibold text-gray-700 mt-7">
            <span>Already subscribed to Netflix?</span>
            {` `}
            <span className="text-white cursor-pointer hover:underline">
              <Link to="/login">Sign In</Link>
            </span>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
