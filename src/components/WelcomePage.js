import React from "react";
import axios from "axios";
import requests from "../data/requests";
import { useQuery } from "react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const fetchMovies = async function () {
  const res = await axios.get(requests.requestPopular);
  return res.data.results;
};

const WelcomePage = () => {
  const { data: movies } = useQuery(["Popular-movies"], fetchMovies, {
    refetchOnWindowFocus: false,
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  });
  if (!movies) return;
  const firstMovie = movies[Math.floor(Math.random() * movies.length)];
  const cutText = function (text, num) {
    if (num < text.length) return text.slice(0, num) + "...";
    else return text;
  };
  return (
    <section className="relative w-full h-screen">
      <div className="w-full h-full">
        <div className="absolute z-40 w-full h-screen bg-gradient-to-r from-black" />
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          className="object-cover w-full h-full "
          src={`https://image.tmdb.org/t/p/original${firstMovie.backdrop_path}`}
          alt="firstmovie"
        />
      </div>
      <div className="absolute top-[30%] px-5 flex flex-col gap-3 w-full md:w-[50%] z-50">
        <div>
          <h1 className="text-4xl font-bold">{firstMovie.title}</h1>
        </div>
        <div className="flex gap-2 text-sm font-medium">
          <button className="px-3 py-1 text-black bg-gray-300 ">Play</button>
          <button className="px-4 py-1 text-gray-400 border border-gray-400">
            Watch Later
          </button>
        </div>
        <div className="flex flex-col mt-5 font-semibold ">
          <span className="text-sm text-gray-400">
            {firstMovie.release_date}
          </span>
          <p className="mt-10 text-base font-normal md:mt-0 md:inline-block">
            {cutText(firstMovie.overview, 200)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
