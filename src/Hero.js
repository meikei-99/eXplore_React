import heroVideo from "./assets/hero.mp4";
import { motion } from "framer-motion";

export default function Hero() {
  const yellowbutton =
    "text-xs md:text-sm lg:text-base xl:text-xl border-2 border-pink-200 cursor-pointer w-fit px-4 lg:px-10 p-1 rounded-2xl";
  const yellowbuttonTransition =
    "text-xs md:text-sm lg:text-base xl:text-xl border-2 border-pink-200 cursor-pointer w-fit px-4 lg:px-10 p-1 rounded-2xl bg-pink-200 text-black absolute inset-0 transition-[clip-path] duration-500 ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)] grid place-content-center";
  return (
    <div className="h-screen relative ... grid items-center">
      <motion.div
        className="fixed top-0 left-0 z-30 h-screen w-1/2 grid place-content-center justify-end bg-yellow-200"
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 1.75, delay: 1, ease: "easeInOut" }}
        variants={{
          initialState: {
            opacity: 1,
            y: 0,
          },
          animateState: {
            opacity: 1,
            y: 2000,
          },
          exitState: { opacity: 0 },
        }}
      >
        <h1 className="text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold pr-2">
          nft.
        </h1>
      </motion.div>
      <motion.div
        className="fixed top-0 right-0 z-30 h-screen w-1/2 grid place-content-center justify-start bg-yellow-200"
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{ duration: 1.75, delay: 1, ease: "easeInOut" }}
        variants={{
          initialState: {
            opacity: 1,
            y: 0,
          },
          animateState: {
            opacity: 1,
            y: -2000,
          },
          exitState: { opacity: 0 },
        }}
      >
        <h1 className="text-yellow-500 underline underline-offset-8 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold">
          eXplore
        </h1>
      </motion.div>
      <div className="grid items-center relative bg-black h-screen p-6 xs:p-8 md:p-20">
        <div className="text-white z-10 flex flex-col gap-4 xs:gap-8">
          <div className="flex flex-col sm:flex-row items-baseline gap-6 lg:gap-10 xl:gap-14">
            <div className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-11xl relative ...">
              <h1 className="font-Anton relative ... text-white">eXplore</h1>
              <h1 className="absolute ... top-0 left-1 xs:left-2 font-Anton text-pink-300">
                eXplore
              </h1>
            </div>
            <a
              className="relative ... group -translate-y-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/meikei-99/Technical_Test"
            >
              <h3 className={yellowbutton}>GitHub Repo</h3>
              <h3 className={yellowbuttonTransition}>GitHub Repo</h3>
            </a>
          </div>
          <div className="flex flex-col font-normal text-sm xs:text-base md:text-lg lg:text-xl xl:text-3xl gap-3">
            <h1>
              Search through all NFTs and collections on the{" "}
              <span className="underline underline-offset-8 font-bold">
                Ethereum network
              </span>
              .
            </h1>
            <h1>Scroll down to explore!</h1>
          </div>
        </div>
        <video
          className="absolute object-cover z-0 w-full h-full"
          src={heroVideo}
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
}
