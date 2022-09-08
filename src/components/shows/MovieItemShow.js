import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import UsersContext from "../context/UserContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MovieItemShow = ({ movie }) => {
  const { removeShow } = useContext(UsersContext);
  return (
    <div className=" w-[250px] h-auto relative cursor-pointer flex flex-grow-0 flex-shrink-0 ">
      <LazyLoadImage
        effect="blur"
        className="w-full h-full "
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt=""
      />

      <div className="hover:bg-black/80 opacity-0 hover:opacity-100  w-full h-full absolute left-0 top-0 flex items-center justify-center z-40 ">
        <Link to={`/${movie.title}`} className="w-full h-[80%] mt-auto">
          <div className="font-medium  w-full h-full flex justify-center py-7">
            {movie.title}
          </div>
        </Link>
        <div className="absolute top-1 right-1">
          <AiOutlineClose
            onClick={() => removeShow(movie)}
            size={20}
            className="z-50 cursor-pointer"
          />
        </div>
      </div>
      <div className="absolute left-1/2 right-1/2"></div>
      <div className="absolute"></div>
    </div>
  );
};

export default MovieItemShow;
