import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";
const Home: NextPage = () => {
  return <>home page</>;
};

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Home;
