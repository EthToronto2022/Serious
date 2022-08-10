import { useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

export const ProvidersDashboard = () => { 
  const [user1Offer, setUser1Offer] = useState("");
  const [user1Video, setUser1Video] = useState("");
  const [user1Appointment, setUser1Appointment] = useState("");

  const [user2Offer, setUser2Offer] = useState("");
  const [user2Video, setUser2Video] = useState("");
  const [user2Appointment, setUser2Appointment] = useState("");

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
            <div class="relative flex bg-gray-100 items-center justify-center p-2 min-w-[42rem]">
              <div class="flex items-center h-5">
                <input
                  checked={user1Offer.length !== 0 && user1Video.length !== 0 && user1Appointment.length !== 0}
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

          <div class="px-4 py-5 sm:rounded-lg sm:p-6 flex max-w-[42rem] gap-5">
            <p className="max-w-sm">
              Provide a URL to content with the Activity Completion Code
              embedded by the deadline:
            </p>
            <div className="flex flex-col gap-2">
                <p className="font-bold">August 11, 12:50 PM</p>
                <span className="text-bold">25 hours remaining</span>
            </div>
          </div>
          
          <div className="flex max-w-[42rem] flex-start gap-[15em]">
            <div className="flex flex-col">
                <p>Personalized Offer</p>
                <p>CODE <span className="font-bold">bunny</span></p>
            </div>
            <div class="mt-1">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                    placeholder="http://test.com"
                    value={user1Offer}
                    onChange={(e) => setUser1Offer(e.target.value)}
                />
            </div>
          </div>
          
          <div className="flex max-w-[42rem] flex-start gap-[15em] mt-2">
            <div className="flex flex-col">
                <p>Personalized Video</p>
                <p>CODE <span className="font-bold">aspen</span></p>
            </div>
            <div class="mt-1">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                    placeholder="http://test.com"
                    value={user1Video}
                    onChange={(e) => setUser1Video(e.target.value)}
                />
            </div>
          </div>

          <div className="flex max-w-[42rem] flex-start gap-[15em] mt-2">
            <div className="flex flex-col">
                <p>Video Appointment</p>
                <p>CODE <span className="font-bold">tonic</span></p>
            </div>
            <div class="mt-1">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                    placeholder="http://test.com"
                    value={user1Appointment}
                    onChange={(e) => setUser1Appointment(e.target.value)}
                />
            </div>
          </div>

          <fieldset class="space-y-5 mt-12">
            <div class="relative flex bg-gray-100 items-center justify-center p-2 min-w-[42rem]">
              <div class="flex h-5">
                <input
                  checked={user2Offer.length !== 0 && user2Video.length !== 0 && user2Appointment.length !== 0}
                  id="comments"
                  ariaDescribedby="comments-description"
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
                  Anna
                </label>
                <p id="comments-description" class="text-gray-500">
                I want to buy a new home in Montreal. I’m a first time home buyer.{" "}
                </p>
              </div>
            </div>
          </fieldset>

          <div class="px-4 py-5 sm:rounded-lg sm:p-6 flex max-w-[42rem] gap-5">
            <p className="max-w-sm">
              Provide a URL to content with the Activity Completion Code
              embedded by the deadline:
            </p>
            <div className="flex flex-col gap-2">
                <p className="font-bold">September 29, 8:05 AM</p>
                <span className="text-bold">1 month 20 days 4 hours remaining</span>
            </div>
          </div>
          
          <div className="flex max-w-[42rem] flex-start gap-[15em]">
            <div className="flex flex-col">
                <p>Personalized Offer</p>
                <p>CODE <span className="font-bold">cactus</span></p>
            </div>
            <div class="mt-1">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                    placeholder="http://test.com"
                    value={user2Offer}
                    onChange={(e) => setUser2Offer(e.target.value)}
                 />
            </div>
          </div>
          
          <div className="flex max-w-[42rem] flex-start gap-[15em] mt-2">
            <div className="flex flex-col">
                <p>Personalized Video</p>
                <p>CODE <span className="font-bold">olive</span></p>
            </div>
            <div class="mt-1">
                <input 
                    type="email"
                    name="email" 
                    id="email" 
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                    placeholder="http://test.com"
                    value={user2Video}
                    onChange={(e) => setUser2Video(e.target.value)}
                />
            </div>
          </div>

          <div className="flex max-w-[42rem] flex-start gap-[15em] mt-2">
            <div className="flex flex-col">
                <p>Video Appointment</p>
                <p>CODE <span className="font-bold">cousin</span></p>
            </div>
            <div class="mt-1">
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" 
                    placeholder="http://test.com"
                    value={user2Appointment}
                    onChange={(e) => setUser2Appointment(e.target.value)}
                />
            </div>
          </div>
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default ProvidersDashboard;
