import Header from "../partials/Header";
import Footer from "../partials/Footer";

export const ProvidersDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <div className="flex justify-center items-center mt-72 flex-col">
          <p className="text-3xl">Engage and Sell</p>
          <p className="mb-12 text-lg">
            Manage your opportunities to win serious clients
          </p>

          <fieldset class="space-y-5">
            <div class="relative flex bg-gray-100 items-center justify-center p-2 max-w-lg">
              <div class="flex items-center h-5">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-8 w-8 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div class="ml-3 ">
                <label
                  for="comments"
                  class="font-medium text-gray-700 text-2xl"
                >
                  Eric
                </label>
                <p id="comments-description" class="text-gray-500">
                  I’m hoping to do a cash out refinance in Toronto. Home value
                  is about $245k.{" "}
                </p>
              </div>
            </div>
          </fieldset>

          <div class="px-4 py-5 sm:rounded-lg sm:p-6 flex max-w-lg gap-5">
            <p>
              Provide a URL to content with the Activity Completion Code
              embedded by the deadline:
            </p>
            <p>August 11, 12:50 PM 25 hours remaining</p>
          </div>
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default ProvidersDashboard;
