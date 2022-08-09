import React from "react";

import Header from "../components/Header";
import PricingTables from "../components/PricingTables";
import FeaturesTable from "../components/FeaturesTable";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Faqs from "../components/Faqs";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

function Pricing() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <PricingTables />
        <FeaturesTable />
        <TestimonialsCarousel />
        <Faqs />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Pricing;
