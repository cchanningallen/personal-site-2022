import type { NextPage } from "next";
import Head from "next/head";
import AboutPage from "../components/AboutPage";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Channing Allen | About</title>
        <meta name="description" content="Channing Allen's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
