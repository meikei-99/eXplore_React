import { motion } from "framer-motion";

export default function Sidebar({
  sideBar,
  setNftAddress,
  fetchNft,
  setLoading,
  setProfileLoading,
  setButtonClicked,
  buttonClicked,
  setSideBar,
}) {
  const animateLeft = {
    offscreen: { x: -20, opacity: 0, transition: { duration: 1.5 } },
    onscreen: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };
  const popularList =
    "hover:underline hover:underline-offset-10 ... w-fit rounded-xl hover:animate-[slideRight_0.6s_ease-in-out_forwards] cursor-pointer hover:text-yellow-200";
  return (
    <div>
      <motion.h1
        className="text-3xl xs:text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white font-PT"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        TRENDING
      </motion.h1>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
        className="text-sm xs:text-base sm:text-xl xl:text-2xl 2xl:text-3xl flex flex-col gap-8 xl:gap-10 pt-10 pr-10 font-extralight text-white"
      >
        <motion.button
          variants={animateLeft}
          className={popularList}
          onClick={() => {
            setNftAddress("0xED5AF388653567Af2F388E6224dC7C4b3241C544");
            fetchNft();
            setLoading(true);
            setProfileLoading(true);
            setButtonClicked(!buttonClicked);
            setSideBar(false);
          }}
        >
          Azuki
        </motion.button>
        <motion.button
          variants={animateLeft}
          className={popularList}
          onClick={() => {
            setNftAddress("0x1A92f7381B9F03921564a437210bB9396471050C");
            fetchNft();
            setLoading(true);
            setProfileLoading(true);
            setButtonClicked(!buttonClicked);
            setSideBar(false);
          }}
        >
          Cool Cats
        </motion.button>
        <motion.button
          variants={animateLeft}
          className={popularList}
          onClick={() => {
            setNftAddress("0x60E4d786628Fea6478F785A6d7e704777c86a7c6");
            fetchNft();
            setLoading(true);
            setProfileLoading(true);
            setButtonClicked(!buttonClicked);
            setSideBar(false);
          }}
        >
          Mutant Ape Yatch Club
        </motion.button>
        <motion.button
          variants={animateLeft}
          className={popularList}
          onClick={() => {
            setNftAddress("0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D");
            fetchNft();
            setLoading(true);
            setProfileLoading(true);
            setButtonClicked(!buttonClicked);
            setSideBar(false);
          }}
        >
          0N1 Force
        </motion.button>
        <motion.button
          variants={animateLeft}
          className={popularList}
          onClick={() => {
            setNftAddress("0x9401518f4EBBA857BAA879D9f76E1Cc8b31ed197");
            fetchNft();
            setLoading(true);
            setProfileLoading(true);
            setButtonClicked(!buttonClicked);
            setSideBar(false);
          }}
        >
          The Weirdo Ghost Gang
        </motion.button>
      </motion.div>
      <button
        className="lg:invisible ... absolute top-6 right-6 text-xl w-8 h-8 rounded-full text-black cursor-pointer bg-white font-bold"
        onClick={() => {
          setSideBar(false);
        }}
      >
        X
      </button>
    </div>
  );
}
