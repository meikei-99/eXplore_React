import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function NftBox({
  nftAddress,
  tokenId,
  imageURI,
  imageLoading,
  value1,
  trait1,
  value2,
  trait2,
}) {
  const [loading, setLoading] = useState(imageLoading);
  const [modal, setModal] = useState(false);

  return (
    <div>
      {modal ? (
        <div className="fixed ... grid place-content-center top-0 left-0 z-10 h-screen w-screen bg-gray-900/75 ...">
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 p-4 xs:p-8 bg-black place-content-center align-middle justify-center items-center relative ... rounded-2xl border border-white">
            <button
              className="absolute top-6 right-6 text-xl w-8 h-8 rounded-full text-black cursor-pointer bg-white font-bold"
              onClick={() => {
                setModal(false);
              }}
            >
              X
            </button>
            <div className="h-52 w-52 xs:h-64 xs:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 2xl:h-96 2xl:w-96 grid place-content-center object-cover">
              <LazyLoadImage
                className="max-h-52 max-w-52 xs:max-h-64 xs:max-w-64 md:max-h-72 md:max-w-72 lg:max-h-80 lg:max-w-80 2xl:max-h-96 2xl:max-w-96 rounded-2xl"
                alt={tokenId}
                height="400"
                width="400"
                src={imageURI}
                onLoad={(e) => {
                  setLoading(false);
                }}
              ></LazyLoadImage>
            </div>
            <div className="flex flex-col gap-4 sm:gap-8 w-full text-white place-content-center">
              <h1 className="text-2xl xs:text-3xl md:text-4xl 2xl:text-5xl font-Anton">
                Token ID #{tokenId}
              </h1>
              <div className="flex flex-col gap-4 sm:gap-8">
                <h1 className="text-lg xs:text-xl md:text-2xl 2xl:text-3xl underline underline-offset-8 ... text-gray-500">
                  TRAITS
                </h1>
                {trait1 && trait2 == undefined ? (
                  <div>Limited or no information available.</div>
                ) : (
                  <div className="text-sm xs:text-base md:text-lg 2xl:text-xl flex flex-col gap-4 sm:gap-8">
                    <div className="flex flex-row justify-between">
                      <h1 className="font-bold">
                        {" "}
                        {`${
                          trait1 == undefined
                            ? "Limited or no information available."
                            : trait1
                        }`}
                      </h1>
                      <h1 className="font-light"> {value1}</h1>
                    </div>
                    <div className="flex flex-row justify-between">
                      <h1 className="font-bold">
                        {" "}
                        {`${trait2 == undefined ? "" : trait2}`}
                      </h1>
                      <h1 className="font-light"> {value2}</h1>
                    </div>
                  </div>
                )}
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm md:text-base 2xl:text-lg text-black rounded-2xl cursor-pointer bg-green-300 text-center"
                href={`https://opensea.io/assets/${nftAddress}/${tokenId}`}
                onClick={() => {
                  setModal(false);
                }}
              >
                BUY ME
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Tilt>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          className={`relative ... flex flex-col gap-4 align-middle justify-center rounded-2xl ${
            loading
              ? "bg-gradient-to-r from-indigo-300 to-purple-300"
              : "bg-gray-900"
          }`}
        >
          <div className="h-52 w-52 sm:h-64 sm:w-64 md:h-52 md:w-52 xl:h-64 xl:w-64 2xl:h-80 2xl:w-80 grid place-content-center object-cover">
            <LazyLoadImage
              className="rounded-2xl max-h-52 max-w-52 sm:max-h-64 sm:max-w-64 md:max-h-52 md:max-w-52 xl:max-h-64 xl:max-w-64 2xl:max-h-80 2xl:max-w-80"
              alt={tokenId}
              height="400"
              width="400"
              src={imageURI}
              onLoad={(e) => {
                setLoading(false);
              }}
            ></LazyLoadImage>
          </div>
          <div className="text-sm xl:text-base 2xl:text-lg flex flex-row justify-between">
            <h1 className="border border-yellow-200 text-white px-6 rounded-2xl">
              Token ID #{tokenId}
            </h1>
            <button
              className="bg-yellow-300 px-5 w-fit rounded-2xl hover:scale-105"
              onClick={() => {
                setModal(!modal);
              }}
            >
              More
            </button>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}
