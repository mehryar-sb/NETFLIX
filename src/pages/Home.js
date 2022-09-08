import React from "react";
import WelcomePage from "./../components/WelcomePage";
import requests from "./../data/requests";
import { useQuery, useMutation } from "react-query";
import { RowWrapper } from "./../components/RowWrapper";

const Home = () => {
  return (
    <>
      <WelcomePage></WelcomePage>
      <RowWrapper></RowWrapper>
    </>
  );
};

export default Home;
