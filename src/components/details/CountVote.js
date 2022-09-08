import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const CountVote = ({ movie }) => {
  return (
    <div className=" flex items-center gap-1">
      <MdOutlineAccountCircle size={20} className="text-red-600" />
      <span>{movie.vote_count}</span>
      <span>Votes</span>
    </div>
  );
};

export default CountVote;
