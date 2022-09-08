import React from "react";
import { MdLanguage } from "react-icons/md";
const Language = ({ movie }) => {
  return (
    <div className=" flex items-center gap-1">
      <MdLanguage size={20} className="text-red-600" />
      <span>Language : </span>
      <span>{movie.original_language}</span>
    </div>
  );
};

export default Language;
