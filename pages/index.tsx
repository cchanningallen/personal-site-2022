import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Channing Allen</title>
        <meta name="description" content="Channing Allen's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
