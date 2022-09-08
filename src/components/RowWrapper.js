import React from "react";
import Row from "./Row";
import requests from "./../data/requests";

const rows = [
  { id: "m1", title: "Up Coming", url: requests.requestUpcoming },
  { id: "m2", title: "Popular", url: requests.requestPopular },
  { id: "m3", title: "Trending", url: requests.requestTrending },
  { id: "m4", title: "Top Rated", url: requests.requestTopRated },
  { id: "m5", title: "Horror", url: requests.requestHorror },
];

export const RowWrapper = () => {
  return (
    <section className="flex flex-col w-full gap-3 mb-10">
      {rows.map((row) => {
        return <Row key={row.id} title={row.title} url={row.url}></Row>;
      })}
    </section>
  );
};
