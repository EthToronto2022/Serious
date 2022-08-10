import Header from "../partials/Header";
import Footer from "../partials/Footer";

const ProvidersRegistrations = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <div className="flex justify-center items-center mt-72 flex-col">
          <p className="text-3xl">Register as a provider</p>
          <p className="mb-12 text-lg">
            Signup to receive engagement from serious clients
          </p>

          <div class="px-4 py-5 sm:rounded-lg sm:p-6">
            <div class="min-w-[400px]">
              <div class="mt-5 md:mt-0 md:col-span-2">
                <div class="">
                  <div class="col-span-6 sm:col-span-4 mb-4">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4 mb-4">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Service category
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Mortgage</option>
                      <option>Law Services</option>
                      <option>Wealth Advising</option>
                      <option>General Contracting</option>
                      <option>Plastic Surgery</option>
                      <option>Web3 Bootcamps</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-4 mb-4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Website URL
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 mb-4">
                    <label
                      for="country"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Logo URL
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div class="col-span-6 mb-4">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Company description and value proposition
                    </label>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default ProvidersRegistrations;
