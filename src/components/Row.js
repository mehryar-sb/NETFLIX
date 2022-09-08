import React, { useRef } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Movies from "./Movies";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const fetchMovies = async function (url) {
  const res = await axios.get(url);
  return res.data.results;
};

const Row = ({ url, title }) => {
  const { data: movies } = useQuery(["Upcomingmovies", url], () =>
    fetchMovies(url),
  );
  const ref = useRef(null);

  const leftHandler = function () {
    ref.current.scrollLeft -=
      ref.current.offsetWidth - ref.current.offsetWidth / 4;
  };
  const rightHandler = function () {
    ref.current.scrollLeft +=
      ref.current.offsetWidth - ref.current.offsetWidth / 4;
  };
  if (!movies) return;
  return (
    <div className="w-full mx-auto  mt-8 px-2 group ">
      <div className=" w-full   relative  ">
        <span className="text-lg font-semibold ">{title}</span>
        <div
          ref={ref}
          className=" w-full  flex gap-2 overflow-x-scroll scroll-smooth odd:whitespace-nowrap mt-3 scrollbar-hide   ">
          <HiChevronLeft
            onClick={leftHandler}
            className="icon-arrow left-0"
            size={35}
          />
          {movies.map((movie, i) => {
            return <Movies key={i} movie={movie}></Movies>;
          })}
          <HiChevronRight
            onClick={rightHandler}
            className="icon-arrow right-0  "
            size={35}
          />
        </div>
      </div>
    </div>
  );
};

export default Row;
