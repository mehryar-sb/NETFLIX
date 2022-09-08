import React from "react";
import { BsCalendarCheck } from "react-icons/bs";

const Realase = ({ movie }) => {
  return (
    <div className=" flex items-center gap-1">
      <BsCalendarCheck size={20} className="text-red-600" />
      <span>Realase : </span>

      <span>{movie.release_date}</span>
    </div>
  );
};

export default Realase;
