import type { NextPage } from "next";
// Components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Grid from "./Grid/Grid";
import Card from "../components/Card/Card";
import Spinner from "../components/Spinner/Spinner";
import Layout from "../components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout page="Home">
      <main className="relative h-screen overflow-y-scroll">
        <Header />
        <Hero />
        <Grid />
        <Card />
        <Spinner />
      </main>
    </Layout>
  );
};

export default Home;
