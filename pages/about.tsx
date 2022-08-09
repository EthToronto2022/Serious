import React from "react";

import Header from "../components/Header";
import AboutIntro from "../components/AboutIntro";
import AboutStory from "../components/AboutStory";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Career from "../components/Career";
import Process from "../components/Process";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <AboutIntro />
        <AboutStory />
        <Stats />
        <Team />
        <Career />
        <Process />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default About;
