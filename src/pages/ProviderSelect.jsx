import React from 'react'

import Dropdown from '../utils/Dropdown'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

import { PROVIDER_LIST } from '../constants'
import { useBuyerFlow } from '../context/buyerFlow'
import StarRating from '../partials/StarRating'

const ProviderSelect = () => {
  const { config, setConfig } = useBuyerFlow()

  const onPress = (idx) => {
    const newSetInstance = new Set([...config.selectedProviders])

    config.selectedProviders.has(idx)
      ? newSetInstance.delete(idx)
      : newSetInstance.add(idx)

    setConfig({ ...config, selectedProviders: newSetInstance })
  }

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
                  Which provider?
                </h1>
                <p
                  className="text-xl text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Choose up to four providers you will
                </p>
              </div>
            </div>
          </div>
        </div>
        {PROVIDER_LIST.map((provider, idx) => {
          const { name, description } = provider

          return (
            <Dropdown
              title={name}
              onPress={() => onPress(idx)}
              isSelected={config.selectedProviders.has(idx)}
            >
              <div className="flex w-full justify-between">
                <p>{description}</p>
                <ul>
                  <li>
                    <label className="font-xs text-gray-700">Service</label>
                    <StarRating rating={3} />
                  </li>
                  <li>
                    <label className="font-xs text-gray-700">Pricing</label>
                    <StarRating rating={2} />
                  </li>
                  <li>
                    <label className="font-xs text-gray-700">
                      Offer Accuracy
                    </label>
                    <StarRating rating={4} />
                  </li>
                </ul>
              </div>
            </Dropdown>
          )
        })}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  )
}

export default ProviderSelect
