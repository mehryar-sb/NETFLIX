import React, { useRef, useContext } from "react";
import backnet from "../../data/img/backnet.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import UsersContext from "../context/UserContext";
import MovieItemShow from "./MovieItemShow";

const MoviesShow = () => {
  const { login } = useContext(UsersContext);

  const ref = useRef(null);

  const leftHandler = function () {
    ref.current.scrollLeft -=
      ref.current.offsetWidth - ref.current.offsetWidth / 4;
  };
  const rightHandler = function () {
    ref.current.scrollLeft +=
      ref.current.offsetWidth - ref.current.offsetWidth / 4;
  };
  return (
    <section className="w-full ">
      <div className="w-full h-[340px] relative">
        <img className="w-full h-full" src={backnet} alt="" />
        <div className="absolute top-0 left-0 bg-black/60 w-full h-[340px] z-10 "></div>
        <div className="absolute top-[50%] left-7 z-20 text-5xl font-bold">
          <h1>My Shows</h1>
        </div>
      </div>
      <div className="w-full mx-auto  mt-8 px-2 group ">
        <div className=" w-full   relative  ">
          <span className="text-lg font-semibold text-gray-500 ">My Shows</span>
          <div
            ref={ref}
            className=" w-full  flex gap-2 overflow-x-scroll scroll-smooth odd:whitespace-nowrap mt-3 scrollbar-hide   ">
            <HiChevronLeft
              onClick={leftHandler}
              className="icon-arrow left-0"
              size={35}
            />
            {login?.shows?.map((movie, i) => {
              return <MovieItemShow key={i} movie={movie}></MovieItemShow>;
            })}
            <HiChevronRight
              onClick={rightHandler}
              className="icon-arrow right-0  "
              size={35}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesShow;
