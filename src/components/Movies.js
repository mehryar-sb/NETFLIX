import React, { useState, useContext, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UsersContext from "./context/UserContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Movies = ({ movie }) => {
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

  return (
    <div className=" w-[250px] h-auto  relative cursor-pointer flex flex-grow-0 flex-shrink-0  ">
      <LazyLoadImage
        effect="blur"
        width="100%"
        height="100%"
        className="object-cover w-full h-full"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />

      <div className="absolute top-0 left-0 z-40 flex items-center justify-center w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 ">
        <Link to={movie.title} className="w-full h-[80%] mt-auto">
          <div className="flex justify-center w-full h-full font-medium py-7">
            {movie.title}
          </div>
        </Link>
        <div className="absolute top-1 left-1">
          {like ? (
            <FaHeart
              onClick={unLikeHandler}
              size={20}
              className="z-50 cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={likeHandler}
              size={20}
              className="z-50 cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="absolute left-1/2 right-1/2"></div>
      <div className="absolute"></div>
    </div>
  );
};

export default Movies;
