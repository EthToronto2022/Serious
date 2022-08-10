import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { useUserContract } from "../utils/contractInterfaceUser.js";

const mockBusinesess = [
  { name: "Ratehub Mortgage", completed: false },
  {
    name: "True North Mortgage",
    completed: true,
    tasks: ["Preview Personalized Offer", "Attend Video Appointment"],
  },
];

const pledge = 0.01;

function Dashboard() {
  const { loading, keywords } = useUserContract();

  const [businesess, setBusinesess] = useState(mockBusinesess);
  const isAllCompleted = businesess.every((business) => business.completed);

  const completedRatings = businesess.every(
    (b) => b.ratings && Object.values(b.ratings).every((r) => r > 0)
  );

  console.log(keywords);
  if (loading || keywords.length === 0) {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="h-auto w-screen">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                  {/* Section header */}
                  <div className="max-w-3xl mx-auto text-center flex-col flex items-center">
                    <h1 className="h1 mb-4" data-aos="zoom-y-out">
                      Manage your interactions.
                    </h1>
                    <p
                      className="text-xl text-gray-600"
                      data-aos="zoom-y-out"
                      data-aos-delay="150"
                    >
                      Follow up on your commitments and restore pledged funds.
                    </p>
                    {keywords.length === 0 && (
                      <p
                        className="h3 mt-16"
                        data-aos="zoom-y-out"
                        data-aos-delay="150"
                      >
                        Navigate to your products to start.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="h-auto w-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center flex-col flex items-center">
                  <h1 className="h1 mb-4" data-aos="zoom-y-out">
                    Manage your interactions.
                  </h1>
                  <p
                    className="text-xl text-gray-600"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Follow up on your commitments and restore pledged funds.
                  </p>

                  <div className="flex flex-col mt-8 w-64 gap-2">
                    <div className="inline-flex bg-black h-24 items-center justify-center rounded-md flex flex-col relative w-64">
                      <h3
                        className="h3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
                        data-aos="zoom-y-out"
                      >
                        {`${pledge} ETH`}
                      </h3>
                      <p
                        className="text-xl text-gray-200"
                        data-aos="zoom-y-out"
                        data-aos-delay="150"
                      >
                        Pledge
                      </p>
                      <div className="w-full relative">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="w-5 h-5 text-white absolute right-3 bottom-1"
                          data-aos="zoom-y-out"
                          data-aos-delay="300"
                        />
                      </div>
                    </div>
                    <div>
                      {isAllCompleted ? (
                        <button
                          className={`btn-sm text-gray-200 hover:bg-gray-800 w-full ${
                            completedRatings ? "bg-gray-800" : "bg-red-600"
                          }`}
                          disabled={!completedRatings}
                        >
                          Rate and Withdraw Pledge
                        </button>
                      ) : (
                        <div className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full">
                          <div className="flex gap-2">
                            <input
                              placeholder="Input Code"
                              className="text-gray-200 bg-gray-900 hover:bg-gray-800 ml-4"
                            />
                            <button className=" hover:bg-gray-800 mr-4">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="w-4 h-4"
                                data-aos="zoom-y-out"
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg w-full mb-4">
          <div className="bg-white rounded-md space-y-px">
            {businesess.map((business) => (
              <label className="rounded-md relative border p-4 flex cursor-pointer focus:outline-none items-center">
                <input
                  type="radio"
                  disabled
                  checked={business.completed}
                  className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  aria-labelledby={`${business.name}-label`}
                  aria-describedby={`${business.name}-description`}
                />
                <span className="ml-3 flex flex-col w-full">
                  <span
                    id={`${business.name}-label`}
                    className="block text-sm font-medium h4"
                  >
                    {business.name}
                  </span>
                  <div id={`${business.name}-description`}>
                    {isAllCompleted ? (
                      <RatingMenu
                        onUpdate={(ratings) => {
                          const copy = [...businesess];
                          if (businesess.indexOf(business) !== -1) {
                            copy[businesess.indexOf(business)].ratings =
                              ratings;
                            setBusinesess(copy);
                          }
                        }}
                      />
                    ) : business.tasks ? (
                      business.tasks.map((task) => (
                        <span className="block text-sm">{task}</span>
                      ))
                    ) : (
                      <span className="block text-sm">Waiting for tasks</span>
                    )}
                  </div>
                </span>
              </label>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function RatingMenu({ onUpdate }) {
  const [service, setService] = useState(0);
  const [price, setPrice] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  useEffect(() => {
    onUpdate({ service, price, accuracy });
  }, [service, price, accuracy]);

  return (
    <div className="w-full flex flex-col gap-1 mt-2">
      <div className="flex w-full justify-between">
        <span className="block text-sm">Service</span>
        <StarLevel onSubmit={(x) => setService(x)} />
      </div>
      <div className="flex w-full justify-between">
        <span className="block text-sm">Price</span>
        <StarLevel onSubmit={(x) => setPrice(x)} />
      </div>
      <div className="flex w-full justify-between">
        <span className="block text-sm">Offer Accuracy</span>
        <StarLevel onSubmit={(x) => setAccuracy(x)} />
      </div>
    </div>
  );
}

function StarLevel({ onSubmit }) {
  const [starLevel, setStarLevel] = useState(0);
  const [hoveringLevel, setHoveringLevel] = useState(0);

  useEffect(() => {
    onSubmit(starLevel);
  }, [starLevel]);

  return (
    <div className="flex gap-0.5">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const level = index + 1;
          return (
            <div
              key={level}
              className={`flex items-center justify-center cursor-pointer`}
              onMouseEnter={() => setHoveringLevel(level)}
              onMouseLeave={() => setHoveringLevel(0)}
              onClick={() => setStarLevel(level)}
            >
              <FontAwesomeIcon
                icon={faStar}
                className={`w-4 h-4 ${
                  starLevel >= level || hoveringLevel >= level
                    ? "text-yellow-500"
                    : "text-gray-500"
                }`}
              />
            </div>
          );
        })}{" "}
    </div>
  );
}

export default Dashboard;
