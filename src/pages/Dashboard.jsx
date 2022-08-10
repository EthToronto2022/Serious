import React, { useState } from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons/faKeyboard'
import Modal from '../utils/Modal'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

const busineses = [
  { name: 'Ratehub Mortgage', completed: true },
  {
    name: 'True North Mortgage',
    completed: false,
    tasks: ['Preview Personalized Offer', 'Attend Video Appointment'],
  },
]

const pledge = 0.01

function Dashboard() {
  const [inputCodeModalOpen, setInputCodeModalOpen] = useState(false)

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
                    <div className="flex gap-2 btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-lg w-full mb-4">
          <div className="bg-white rounded-md space-y-px">
            {busineses.map((business) => (
              <label className="rounded-md relative border p-4 flex cursor-pointer focus:outline-none items-center">
                <input
                  type="radio"
                  disabled
                  checked={business.completed}
                  className="h-4 w-4 mt-0.5 cursor-pointer shrink-0 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  aria-labelledby={`${business.name}-label`}
                  aria-describedby={`${business.name}-description`}
                />
                <span className="ml-3 flex flex-col">
                  <span
                    id={`${business.name}-label`}
                    className="block text-sm font-medium h4"
                  >
                    {business.name}
                  </span>

                  <div id={`${business.name}-description`}>
                    {business.tasks ? (
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
  )
}

export default Dashboard
