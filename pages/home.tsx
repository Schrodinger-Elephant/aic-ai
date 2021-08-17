import Layout from "components/teacher/Layout";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to AIC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout />
      </main>
    </div>
  );
};

export default Home;
