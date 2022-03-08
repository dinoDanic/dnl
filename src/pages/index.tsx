import type { NextPage } from "next";
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
