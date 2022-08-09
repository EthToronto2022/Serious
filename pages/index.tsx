import type { NextPage } from "next";

import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import FeaturesHome from "../components/FeaturesHome";
import FeaturesBlocks from "../components/FeaturesBlocks";
import FeaturesWorld from "../components/FeaturesWorld";
import News from "../components/News";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <FeaturesWorld />
        <News />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default Home;
