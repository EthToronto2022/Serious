import Header from "../partials/Header";
import Footer from "../partials/Footer";
// import VideoJS from "../utils/VideoJS";
import axios from "axios";
import React, { useEffect, useState } from "react";

const API_KEY = "557e7362-72c9-47e9-acdd-60df6f0e6fc3"; // process.env.LV_API_KEY

export const ProvidersVideo = () => {
  const [recordingUrl, setRecordingUrl] = useState(null);

  //   const playerRef = React.useRef(null);

  //   const videoJsOptions = {
  //     autoplay: true,
  //     controls: true,
  //     responsive: true,
  //     fluid: true,
  //     sources: [{
  //       src: 'https://file-examples.com/storage/fe522079b962f100d94fb66/2017/04/file_example_MP4_640_3MG.mp4',
  //       type: 'video/mp4'
  //     }]
  //   };

  //   const handlePlayerReady = (player) => {
  //     playerRef.current = player;

  //     // You can handle player events here, for example:
  //     player.on('waiting', () => {
  //       videojs.log('player is waiting');
  //     });

  //     player.on('dispose', () => {
  //       videojs.log('player will dispose');
  //     });
  //   };

  const getRecordingUrl = async () => {
    const response = await axios.get(
      "https://livepeer.studio/api/stream/4ad44e95-fa1c-44c1-bf8d-669d67bd7d1a/sessions?record=1",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(JSON.stringify(response.data));
    setRecordingUrl(response.data[response.data.length - 2].mp4Url);
  };

  // const rtmpURL = "https://livepeer.studio/api";
  // const playbackURL = "https://livepeercdn.com/hls/{playbackId}/index.m3u8";

  // const createStream = async () => {
  //   console.log("creating stream");
  //   const response = await axios.post("https://livepeer.studio/api/stream", {
  //     headers: {
  //       Authorization: `Bearer ${API_KEY}`,
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "true",
  //     },
  //     data: JSON.stringify({
  //       name: "serious_stream",
  //       profiles: [
  //         {
  //           name: "720p",
  //           bitrate: 2000000,
  //           fps: 30,
  //           width: 1280,
  //           height: 720,
  //         },
  //         {
  //           name: "480p",
  //           bitrate: 1000000,
  //           fps: 30,
  //           width: 854,
  //           height: 480,
  //         },
  //         {
  //           name: "360p",
  //           bitrate: 500000,
  //           fps: 30,
  //           width: 640,
  //           height: 360,
  //         },
  //       ],
  //     }),
  //   });
  //   const respObj = response.data;
  //   console.log("response:", JSON.stringify(respObj));
  //   let playBackId = respObj.playBackId;
  //   let id = respObj.id;
  //   let streamKey = respObj.streamKey;
  // };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        <div className="flex justify-center items-center mt-72 flex-col">
          <p className="text-3xl">Use Video to Engage</p>
          <p className="mb-12 text-lg">
            Record personalized video for prospects who have committed to watch
            it.
          </p>

          <a
            className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
            onClick={getRecordingUrl}
          >
            Retrieve Recording URL
          </a>
          <br />
          <p>
            <a href={recordingUrl} target="_blank">
              {recordingUrl}
            </a>
          </p>

          {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}

          {/* <fieldset className="space-y-5">
            <div className="relative flex bg-gray-100 items-center justify-center p-2 max-w-lg">
              <div className="flex items-center h-5">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-8 w-8 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 ">
                <label
                  htmlFor="comments"
                  className="font-medium text-gray-700 text-2xl"
                >
                  Eric
                </label>
                <p id="comments-description" className="text-gray-500">
                  I’m hoping to do a cash out refinance in Toronto. Home value
                  is about $245k.{" "}
                </p>
              </div>
            </div>
          </fieldset>

          <div className="px-4 py-5 sm:rounded-lg sm:p-6 flex max-w-lg gap-5">
            <p>
              Provide a URL to content with the Activity Completion Code
              embedded by the deadline:
            </p>
            <p>August 11, 12:50 PM 25 hours remaining</p>
          </div>*/}
        </div>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
};

export default ProvidersVideo;
