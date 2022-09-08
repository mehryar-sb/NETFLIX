import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import requests from "./../../data/requests";
import VoteMovie from "./VoteMovie";
import Realase from "./Realase";
import Language from "./Language";
import CountVote from "./CountVote";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const getAllMovies = async function () {
  const res1 = await axios.get(requests.requestPopular);
  const res2 = await axios.get(requests.requestTopRated);
  const res3 = await axios.get(requests.requestTrending);
  const res4 = await axios.get(requests.requestHorror);
  const res5 = await axios.get(requests.requestUpcoming);
  return [
    ...res1.data.results,
    ...res2.data.results,
    ...res3.data.results,
    ...res4.data.results,
    ...res5.data.results,
  ];
};
const MovieDetails = () => {
  const { id } = useParams();

  const { data: allMovies } = useQuery(["all-movies"], getAllMovies);
  if (!allMovies) return <p>loading...</p>;
  const movie = allMovies.find((movie) => movie.title === id);

  return (
    <div className="relative w-full h-screen">
      <div className="fixed w-full h-full ">
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          className="object-cover w-full h-full"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/70"></div>
      </div>
      <div className="w-full h-[490px] absolute left-0 top-[15%] z-20  lg:px-20 flex flex-col lg:flex-row items-center gap-4  ">
        <div className=" h-full rounded p-[6px] back-img w-9/12 md:w-6/12 lg:w-4/12">
          <LazyLoadImage
            effect="blur"
            width="100%"
            height="100%"
            className="object-cover w-full h-full rounded"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="flex flex-col w-11/12 lg:w-8/12 ">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <VoteMovie movie={movie} />
          </div>
          <div className="flex flex-col gap-4 text-base font-medium ">
            <Realase movie={movie} />
            <Language movie={movie} />
            <CountVote movie={movie} />
            <div className="w-10/12 mt-5 leading-normal tracking-wider ">
              <p className="mb-5 text-justify">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
