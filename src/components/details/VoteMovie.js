import React, { useState, useContext, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import UsersContext from "./../context/UserContext";

const VoteMovie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { addShow, login, removeShow } = useContext(UsersContext);

  const likeHandler = function () {
    if (!login) {
      alert("Please Login!");
      return;
    }
    setLike(!like);
    addShow(movie);
  };

  const unLikeHandler = function () {
    setLike(!like);
    removeShow(movie);
  };
  useEffect(() => {
    if (!login) setLike(false);
  }, [login]);
  const voteStyle =
    movie.vote_average > 7 ? "text-green-600" : "text-orange-600";
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-xl font-medium">
        <span className={` ${voteStyle}`}>{movie.vote_average}</span>

        <span>/10</span>
      </div>
      <hr className="w-10 h-1 p-0 m-0 mt-1 bg-red-600 border-none" />
      <span className="px-2 py-1 mt-2 text-lg font-bold uppercase bg-red-600 rounded-xl">
        imdb
      </span>
      {like ? (
        <FaHeart
          onClick={unLikeHandler}
          size={20}
          className="z-50 mt-3 cursor-pointer"
        />
      ) : (
        <FaRegHeart
          onClick={likeHandler}
          size={20}
          className="z-50 mt-3 cursor-pointer"
        />
      )}
    </div>
  );
};

export default VoteMovie;
