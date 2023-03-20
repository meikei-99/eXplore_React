import { Alchemy, Network } from "alchemy-sdk";
import NftBox from "./components/NftBox";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsWifi2 } from "react-icons/bs";
import Sidebar from "./components/Sidebar";

export default function App() {
  const config = {
    apiKey: "dvpUFPrHseQHU-j3PSU2RLGrXuUvSY1V",
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);
  const [NFT, setNFT] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [nftAddress, setNftAddress] = useState(
    "0x809D8f2B12454FC07408d2479cf6DC701ecD5a9f"
  );
  const [loading, setLoading] = useState(false);
  const [errorFetchingNft, setErrorFetchingNft] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [name, setName] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [floorPrice, setFloorPrice] = useState("");
  const [profile, setProfile] = useState("");
  const [profileLoading, setProfileLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [discord, setDiscord] = useState("");

  //NFT attributes
  const [displayAttribute, setDisplayAttribute] = useState(false);
  // const [firstTokenId, setFirstTokenId] = useState("");
  // const [finalTokenId, setFinalTokenId] = useState("");

  const fetchNft = async () => {
    try {
      const omitMetadata = false;
      const { nfts } = await alchemy.nft.getNftsForContract(nftAddress, {
        omitMetadata: omitMetadata,
      });
      setName(nfts[0].contract.name);
      setTotalSupply(nfts[0].contract.totalSupply);
      setFloorPrice(nfts[0].contract.openSea.floorPrice);
      setProfile(nfts[0].contract.openSea.imageUrl);
      setDescription(nfts[0].contract.openSea.description);
      setDiscord(nfts[0].contract.openSea.discordUrl);

      if (nfts[0].rawMetadata.attributes.length <= 2) {
        setDisplayAttribute(false);
      } else {
        setDisplayAttribute(true);
      }
      console.log(`Display attribute:${displayAttribute}`);

      //TODO: Fetch NFT's owner
      // let i = 1;
      // setFirstTokenId(nfts[0].tokenId);
      // console.log(`FIRST TOKEN ID:${firstTokenId}`);
      // const add = firstTokenId + 100;
      // setFinalTokenId(add);
      // console.log(`FINAL TOKEN ID:${finalTokenId}`);

      let updateNFT = [];
      for (let nft of nfts) {
        updateNFT.push(nft);
        setNFT(updateNFT);
        // i++;
      }
      setErrorFetchingNft(false);
    } catch (error) {
      console.log(`Error in fetching NFT:${error}`);
      setErrorFetchingNft(true);
    }
  };

  //TODO: Fetch NFT's owner
  // const fetchOwner = async () => {
  //   try {
  //     console.log(`Fetching owner... final token id ${finalTokenId}`);
  //     for (let i = firstTokenId; i < finalTokenId; i++) {
  //       const owner = await alchemy.nft.getOwnersForNft(nftAddress, i);
  //       console.log(`Owner ${i}.${owner.owners}`);
  //     }
  //   } catch (error) {
  //     console.log(`Error in fetching owner:${error}`);
  //   }
  // };

  useEffect(() => {
    fetchNft();
    // fetchOwner();
  }, [buttonClicked]);

  const yellowbutton =
    "text-xs xs:text-sm xl:text-lg 2xl:text-xl bg-yellow-200 border border-black rounded-2xl px-4 lg:px-8 cursor-pointer grid place-content-center";

  return (
    <div className="flex flex-col bg-gray-900">
      {sideBar ? (
        <div className="bg-red-400 text-4xl">
          <div className="fixed ... h-screen w-screen top-0 left-0 z-10 grid place-content-center text-white bg-black/50">
            <div className="flex flex-col gap-8 p-10 xs:p-12 sm:p-20 bg-black relative ... rounded-2xl border border-white">
              <Sidebar
                sideBar={sideBar}
                setNftAddress={setNftAddress}
                fetchNft={fetchNft}
                setLoading={setLoading}
                setProfileLoading={setProfileLoading}
                setButtonClicked={setButtonClicked}
                buttonClicked={buttonClicked}
                setSideBar={setSideBar}
              ></Sidebar>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="pt-10 p-14 text-xl grid lg:grid-cols-3 place-content-center">
        <div className="hidden ... lg:block col-span-1">
          <Sidebar
            sideBar={sideBar}
            setNftAddress={setNftAddress}
            fetchNft={fetchNft}
            setLoading={setLoading}
            setProfileLoading={setProfileLoading}
            setButtonClicked={setButtonClicked}
            buttonClicked={buttonClicked}
            setSideBar={setSideBar}
          ></Sidebar>
        </div>
        <motion.div
          className="col-span-2 flex flex-col gap-8 place-content-center"
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col sm:flex-row gap-3 md:gap-8 justify-start sm:justify-center lg:justify-end sm:items-center">
            <button
              onClick={() => {
                setSideBar(!sideBar);
                console.log(`SIDEBAR:${sideBar}`);
              }}
            >
              <BsWifi2 className="lg:hidden ... text-white text-4xl md:text-5xl border-2 border-yellow-300 items-center rounded-full cursor-pointer"></BsWifi2>
            </button>
            <h1 className="text-xs xs:text-sm xl:text-lg 2xl:text-xl text-white">
              search by address
            </h1>
            <div className="flex flex-row gap-4">
              <input
                className="text-xs xs:text-sm xl:text-lg 2xl:text-xl border border-black rounded-2xl w-28 sm:w-72 md:w-96 px-6"
                placeholder="search by contract address"
                onChange={(e) => {
                  setNftAddress(e.target.value);
                }}
                value={nftAddress}
              ></input>
              <button
                className={yellowbutton}
                onClick={() => {
                  fetchNft();
                  setLoading(true);
                  setProfileLoading(true);
                  setButtonClicked(!buttonClicked);
                }}
              >
                SEARCH
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 xl:gap-8 2xl:gap-14 justify-center items-center relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:h-56 xl:w-56 grid place-content-center object-cover overflow-hidden">
                <LazyLoadImage
                  className={`rounded-2xl max-w-32 max-h-32 sm:max-w-40 sm:max-h-40 md:max-h-48 md:max-w-48 xl:max-h-56 xl:max-w-56 ${
                    profileLoading
                      ? "bg-gradient-to-r from-indigo-300 to-purple-300"
                      : "bg-gray-900"
                  }`}
                  height="400"
                  width="400"
                  src={profile}
                  onLoad={(e) => {
                    setProfileLoading(false);
                  }}
                ></LazyLoadImage>
              </div>
              <div className="grid place-content-center gap-4">
                {errorFetchingNft ? (
                  <h1 className="text-sm sm:text-base md:text-lg 2xl:text-xl h-8 px-4 rounded-2xl font-bold text-white w-fit bg-red-500">
                    error fetching NFTs
                  </h1>
                ) : (
                  ""
                )}
                <div className="flex flex-row gap-4">
                  <h1 className="text-2xl sm::text-3xl md:text-4xl 2xl:text-5xl font-bold text-white font-PT">
                    {name}
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 xl:gap-8">
                  <h1 className={yellowbutton}>
                    Total Supply: {totalSupply ?? "NaN"}
                  </h1>
                  <h1 className={yellowbutton}>
                    Floor Price: {Math.ceil(floorPrice * 1000) / 1000} ETH
                  </h1>
                  {discord ? (
                    <a href={discord} target="_blank" className={yellowbutton}>
                      Discord
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl text-justify leading-normal ... text-white font-extralight">
                {description}
              </h1>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pb-14 grid place-content-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 xl:gap-10 2xl:gap-14">
          {NFT.map((nft) => {
            return (
              <div key={nft.tokenId}>
                {displayAttribute ? (
                  <NftBox
                    nftAddress={nftAddress}
                    tokenId={nft.tokenId}
                    imageURI={nft.rawMetadata.image.replace(
                      "ipfs://",
                      "https://ipfs.io/ipfs/"
                    )}
                    imageLoading={loading}
                    value1={nft.rawMetadata.attributes[0].value}
                    trait1={nft.rawMetadata.attributes[0].trait_type}
                    value2={nft.rawMetadata.attributes[1].value}
                    trait2={nft.rawMetadata.attributes[1].trait_type}
                    key={nft.tokenId}
                  ></NftBox>
                ) : (
                  <NftBox
                    nftAddress={nftAddress}
                    tokenId={nft.tokenId}
                    imageURI={nft.rawMetadata.image.replace(
                      "ipfs://",
                      "https://ipfs.io/ipfs/"
                    )}
                    imageLoading={loading}
                    key={nft.tokenId}
                  ></NftBox>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
