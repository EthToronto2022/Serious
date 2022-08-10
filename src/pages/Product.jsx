import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Checkbox from "../partials/Checkbox";

import { useBuyerFlow } from "../context/buyerFlow";

function Products() {
  const { config, setConfig } = useBuyerFlow();

  const { selectedActivities, name, considerations, product } = config;

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <div className="h-auto w-screen">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-8 md:pt-40 md:pb-12">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="h1 mb-4" data-aos="zoom-y-out">
                  What will you do?
                </h1>
                <p
                  className="text-xl text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  As a serious client, you commit to specific shopping
                  activities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            10 USDC Pledge
          </span>
          <Checkbox
            data={[
              { title: "Review Personalized Offers" },
              { title: "Watch Personalize Video" },
              { title: "Attend Video Appointment" },
            ]}
          />
          <div className="relative border border-gray-300 rounded-md px-6 py-2 mt-8 shadow-sm focus-within:ring-1 focus-within:ring-teal-400 focus-within:border-teal-400">
            <label className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">
              Name
            </label>
            <input
              onChange={(e) => setConfig({ ...config, name: e.target.value })}
              value={name}
              type="text"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Jane Smith"
            />
          </div>
          <div className="relative border border-gray-300 rounded-md px-8 py-2 mt-8 shadow-sm focus-within:ring-1 focus-within:ring-teal-400 focus-within:border-teal-400">
            <label className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">
              Optional: Describe your needs
            </label>
            <textarea
              value={considerations}
              className="block w-full border-0 p-0 text-gray-800 placeholder-gray-500 focus:ring-0 text-xs"
              onChange={(e) =>
                setConfig({ ...config, considerations: e.target.value })
              }
            />
          </div>
          {selectedActivities.size > 0 && name && (
            <Link
              to={`/products/${product.id}/providers`}
              className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 mt-8 animate-fade"
            >
              Next
            </Link>
          )}
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Products;
