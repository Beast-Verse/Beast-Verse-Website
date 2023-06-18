import React, { useState, useEffect } from "react";

//import beast from "../assets/beast.jpeg"
import { MutatingDots } from "react-loader-spinner";
import Footer from "./Footer";
import common from "../assets/Common.gif";
import epic from "../assets/Epic.gif";
import Legendary from "../assets/Legendary.gif";
import Rare from "../assets/Rare.gif";
import {motion} from 'framer-motion' 

import Web3 from "web3";
import axios from "axios";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
// import { useAccount, useConnect } from 'wagmi'
global.Buffer = global.Buffer || require("buffer").Buffer;

const web3 = new Web3(window.ethereum);

var cont = null;

const admin = "0x1ce256752fBa067675F09291d12A1f069f34f5e8";

function Mint() {
  const [isMinting, setIsMinting] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [contra, setContract] = useState([]);
  const [load, setLoad] = useState(false);
  const[isMinted,setIsMinted]=useState(false);
  const[tweety,setTweet]=useState("");
  const[com, setCom] = useState(null);
  const[rar, setRar] = useState(null);
  const[epi, setEpi] = useState(null);
  const[leg, setLeg] = useState(null);
  const loadingHandle = (e) => {
    setLoading(e);
  };

  const [account, setAccount] = useState(null);
  const [isConnect, setIsConnect] = useState(false);

  const [userData, setUserData] = useState([]);
  const [addr, setAddress] = useState(" ");

  const { address, isConnecting, isDisconnected } = useAccount({
    onConnect: ({ address, isReconnected, connector: activeConnector }) => {
      setAccount(address);
      setIsConnect(true);
    },
    onDisconnect() {
      setAccount(null);
      setIsConnect(false);
    },
  });

  const connectEth = async () => {
    setUserData([]);

    let url = "https://bvbackend-production.up.railway.app/api";

    const contractabi = await axios.get(url + "/getAbiandAddress");
    const ABI = contractabi.data.contractABI;
    const ADDRESS = contractabi.data.contractad;

    setAddress(ADDRESS);

      cont = new web3.eth.Contract(ABI, ADDRESS);
      setContract(cont);

      let com = async () => {
        let res = await axios.get(url + "/getRandom", {
          params: {
            rarity: "common",
          },
        });
        return res.data.index;
      };
      let rar = async () => {
        let res = await axios.get(url + "/getRandom", {
          params: {
            rarity: "rare",
          },
        });
        return res.data.index;
      };
      let epi = async () => {
        let res = await axios.get(url + "/getRandom", {
          params: {
            rarity: "epic",
          },
        });
        return res.data.index;
      };
      let leg = async () => {
        let res = await axios.get(url + "/getRandom", {
          params: {
            rarity: "legendary",
          },
        });
        return res.data.index;
      };

      let getCountCom = async () => {
        let res = await axios.get(url + "/count", {
          params: {
            rarity: "common",
            total: 1250,
          },
        });
        return res.data.count;
      };
      let getCountRar = async () => {
        let res = await axios.get(url + "/count", {
          params: {
            rarity: "rare",
            total: 1000,
          },
        });
        return res.data.count;
      };
      let getCountEpi = async () => {
        let res = await axios.get(url + "/count", {
          params: {
            rarity: "epic",
            total: 500,
          },
        });
        return res.data.count;
      };
      let getCountLeg = async () => {
        let res = await axios.get(url + "/count", {
          params: {
            rarity: "legendary",
            total: 250,
          },
        });
        return res.data.count;
      };

      const hashtags = "hashtags=NFTCommunity,NFTProject,Polygon,BeastVerse";
      const tweet = "https://twitter.com/intent/tweet?" + hashtags + "&text=";

      if ((await getCountCom()) < 125) {
        setCom(await getCountCom());
        document.getElementById("mint common").onclick = async () => {
          setIsMinting(true);
          let comValue = await com();
          const comlink =
            "ipfs://QmWEmzBFNVEvMirVVG36fuTN3umnte9eaMqurEyVgfYK1S/" +
            comValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .commonMint(account, comlink, comValue)
            .send({ from: account, value: "5000000000000000000", gasLimit: 300000, gasPrice: 300000000000 })
            .then((res) => {
              console.log(res);
              axios
                .put(url + "/pop", {
                  index: comValue,
                  rarity: "common",
                })
                .then(async (res) => {
                  console.log(res);
                  setIsMinting(false);
                  var tokenId=await cont.methods.totalSupply().call();
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Common Egg #${comValue}! \n Reloading in 10 secs`;
                  //let urly="https://res.cloudinary.com/dcugof3zo/video/upload/v1684909381/WhatsApp_Video_2023-05-23_at_18.38.48_wjtyp1.mp4";
                  const tweetmsg = tweet + "I%20just%20minted%20Common%20Egg%20"+comValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/mumbai/${addr}/${tokenId}`;
                  setIsMinted(true);
                  setTweet(tweetmsg)
                  setTimeout(() => {
                    window.location.reload();
                  }, 10000);
                })
                .catch((err) => console.log(err));
            })
            .catch(async (err) => {
              console.log(err);
              document.getElementById(
                "wlonly"
              ).textContent = `Transaction for Common Egg was rejected! \n Reloading in 2s`;

              axios
                .put(url + "/flip", {
                  index: comValue,
                  rarity: "common",
                })
                .then(async (res) => {
                  console.log(res);
                })

                .catch((err) => console.log(err));

              setTimeout(() => {
                window.location.reload();
              }, 3000);
            });
        };
      }

	  console.log(await getCountCom());
	  console.log(await getCountRar());
	  console.log(await getCountEpi());
	  console.log(await getCountLeg());



      if ((await getCountRar()) < 100) {
        setRar(await getCountRar());
        document.getElementById("mint rare").onclick = async () => {
          setIsMinting(true);
          let rarValue = await rar();
          const rarlink =
            "ipfs://QmdZmNhSV5Zpz5M9nP1YtBaMUffbNqX5r8E8qpWYwHhEZF/" +
            rarValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .rareMint(account, rarlink, rarValue)
            .send({ from: account, value: "7000000000000000000", gasLimit: 300000, gasPrice: 300000000000 })
            .then((res) => {
              console.log(res);
              axios
                .put(url + "/pop", {
                  index: rarValue,
                  rarity: "rare",
                })
                .then(async (res) => {
                  console.log(res);
                  setIsMinting(false);
                  var tokenId=await cont.methods.totalSupply().call();
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Rare Egg #${rarValue}! \n Reloading in 10 secs`;
                  const tweetmsg = tweet + "I%20just%20minted%20Rare%20Egg%20"+rarValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/mumbai/${addr}/${tokenId}`;
                  setIsMinted(true);
                  setTweet(tweetmsg)
                  setTimeout(() => {
                    window.location.reload();
                  }, 10000);
                })
                .catch((err) => console.log(err));
            })
            .catch(async (err) => {
              console.log(err);
              document.getElementById(
                "wlonly"
              ).textContent = `Transaction for Rare Egg was rejected! \n Reloading in 2s`;

              axios
                .put(url + "/flip", {
                  index: rarValue,
                  rarity: "rare",
                })
                .then(async (res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err));

              setTimeout(() => {
                window.location.reload();
              }, 3000);
            });
        };
      }

      if ((await getCountEpi()) < 50) {
        setEpi(await getCountEpi());
        document.getElementById("mint epic").onclick = async () => {
          setIsMinting(true);
          let epiValue = await epi();
          const epilink =
            "ipfs://QmQ3gXuXzNQCJrH2yuSfQABS6CvvjiPfWt3JTsZijAZNo9/" +
            epiValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .epicMint(account, epilink, epiValue)
            .send({ from: account, value: "9000000000000000000", gasLimit: 300000, gasPrice: 300000000000})
            .then((res) => {
              console.log(res);
              axios
                .put(url + "/pop", {
                  index: epiValue,
                  rarity: "epic",
                })
                .then(async (res) => {
                  console.log(res);
                  setIsMinting(false);
                  var tokenId=await cont.methods.totalSupply().call();
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Epic Egg #${epiValue}! \n Reloading in 10 secs`;
                  const tweetmsg = tweet + "I%20just%20minted%20Epic%20Egg%20"+epiValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/mumbai/${addr}/${tokenId}`;
                  setIsMinted(true);
                  setTweet(tweetmsg)
                  setTimeout(() => {
                    window.location.reload();
                  }, 10000);
                })
                .catch((err) => console.log(err));
            })
            .catch(async (err) => {
              console.log(err);
              document.getElementById(
                "wlonly"
              ).textContent = `Transaction for Epic Egg was rejected! \n Reloading in 2s`;

              axios
                .put(url + "/flip", {
                  index: epiValue,
                  rarity: "epic",
                })
                .then(async (res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err));

              setTimeout(() => {
                window.location.reload();
              }, 3000);
            });
        };
      }


      if ((await getCountLeg()) < 25) {
        setLeg(await getCountLeg());
        document.getElementById("mint legendary").onclick = async () => {
          setIsMinting(true);
          let legValue = await leg();
          const leglink =
            "ipfs://Qmah8t9xMMN8LshRX1R6W737swdWods8i3Pdm3nB1aa7T2/" +
            legValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .legendaryMint(account, leglink, legValue)
            .send({ from: account, value: "11000000000000000000", gasLimit: 300000, gasPrice: 300000000000 })
            .then((res) => {
              console.log(res);

              axios
                .put(url + "/pop", {
                  index: legValue,
                  rarity: "legendary",
                })
                .then(async (res) => {
                  console.log(res);
                  setIsMinting(false);
                  var tokenId=await cont.methods.totalSupply().call();
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Legendary Egg #${legValue}! \n Reloading in 10 secs`;
                  const tweetmsg = tweet + "I%20just%20minted%20Legendary%20Egg%20"+legValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/matic/0xe51f9dD4681F1bdB7fe2C52e5193457c784f25d6/${tokenId}`;
                  setTweet(tweetmsg);  
                  setIsMinted(true);
                  setTimeout(() => {
                    window.location.reload();
                  }, 10000);
                })
                .catch((err) => console.log(err));
            })
            .catch(async (err) => {
              console.log(err);
              document.getElementById(
                "wlonly"
              ).textContent = `Transaction for Legendary Egg was rejected! \n Reloading in 2s`;
              axios
                .put(url + "/flip", {
                  index: legValue,
                  rarity: "legendary",
                })
                .then(async (res) => {
                  console.log(res);
                })
                .catch((err) => console.log(err));
              setTimeout(() => {
                window.location.reload();
              }, 3000);
            });
        };
      }
      // document.getElementById("withdraw").onclick = async () => {
      //   await cont.methods.withdraw().send({ from: account });
      // };

      setLoad(true);
  
  };


  async function table() {
    setLoading(true);
    var contract = contra;

    var balance = await contract.methods.balanceOf(account).call();

    const tempData = [];

    for (let i = 0; i < balance; i++) {
      const userMintedId = parseInt(
        await contract.methods.tokenOfOwnerByIndex(account, i).call()
      );
      const tokenURI = await contract.methods.tokenURI(userMintedId).call();
      const metadata = `https://ipfs.io/ipfs/${tokenURI.substr(7)}`;
      const meta = await fetch(metadata);
      const json = await meta.json();
      const name = json["name"];
      tempData.push({ userMintedId, name, i });
    }
    setUserData(tempData);
    setLoading(false);
  }



  useEffect(() => {
    connectEth();
  }, [account, isConnect]);

  useEffect(() => {
    table();
  }, [load]);

  return (
    <>
      <div className="bg-gradient-to-b from-black to-slate-800 min-h-[100vh] flex flex-col items-center justify-center max-[768px]:pt-10 max-[768px]:justify-start pb-0 p-2">
        <h1
          className="pt-10 text-4xl font-bold text-blue-400  lg:text-6xl mb-10"
          id="check"
        >
          MINT YOUR EGGS
        </h1>

        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="mb-10 text-[1.2vw] max-[768px]:text-[5vw] bg-gradient-to-br from-slate-800 to duration-400 transition-all bg-slate-600 text-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/30 p-4 rounded-xl font-Montserrat font-semibold"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="bg-red-500  hover:bg-red-700 text-white p-4 rounded-xl font-Montserrat font-semibold col-span-1 shadow-lg shadow-red-300/40 hover:-translate-y-1 duration-200"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div style={{ display: "flex", gap: 12 }}>
                      <button
                        onClick={openChainModal}
                        style={{ display: "flex", alignItems: "center" }}
                        type="button"
                        className="bg-white p-3 rounded-2xl shadow-lg shadow-purple-500/60 hover:-translate-y-1 duration-300 font-Montserrat  font-semibold "
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 12,
                              height: 12,
                              borderRadius: 999,
                              overflow: "hidden",
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 12, height: 12 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>

                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="bg-white p-3 rounded-2xl  shadow-lg shadow-red-500/60 hover:-translate-y-1 duration-300 font-Montserrat  font-semibold"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>

        {isConnect ? (
          <div className="bg-gray-300/20 rounded-2xl"><h2
            id="wlonly"
            className="my-10 text-[3vw] mx-auto w-[60%] font-Montserrat font-medium text-slate-400 max-[768px]:text-[4.5vw] flex justify-center items-center"
          >
          </h2></div>
        ) : null}

        {isMinting && (
          <div className=" w-full flex items-center justify-center my-10">
            <MutatingDots
              height="100"
              width="100"
              color="#5fa5f9"
              secondaryColor="#ffffff"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}

        {isMinted && (
          <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href={tweety} target="_blank"
          className=' flex flex-row gap-2 items-center hover:border-blue-900 mt-10 rounded-2xl shadow-xl hover:shadow-sm font-bold text-2xl bg-gradient-to-br from-slate-900 to-blue-500 hover:to-slate-900 hover:from-blue-500 text-white py-4 px-16 cursor-pointer'>
             <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="-44.7006 -60.54775 387.4052 363.2865"><path fill="#1da1f2" d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464"/></svg>
            <span> Tweet Now </span>
          </motion.a>
    
        )}

        <div className="bg-blue-500/40 border-2 border-blue-300 max-[768px]:w-[90%] w-[70%] rounded-2xl p-5 mb-10">
              <h3 className="text-center text-white font-Montserrat font-semibold text-[2.2vw] max-[768px]:text-[6vw]">Holder Benefits</h3>
              <ul className=" list-disc text-white font-Montserrat text-[1.2vw] max-[768px]:text-[4vw] mt-3 min-[768px]:leading-6 ml-4">
                <li className="mb-3"><b className="text-blue-400">Powerful in-game characters: </b>Though the game will be free-to-play, these NFTs will grant holders more powerful characters over the free ones!</li>
                <li className="mb-3"><b className="text-blue-400">Staking: </b>Stake your NFTs and earn the Beast Verse token.</li>
                <li className="mb-3"><b className="text-blue-400">BV DAO: </b>Top 10 Holders get to join the BV DAO, the governing body for the Project's future!</li>
              </ul>
              </div>
        <div
          className={`${
            isConnect ? null : "hidden"
          } flex flex-row  max-[768px]:flex-wrap min-[768px]:mx-10`}
          id="noview"
        >
          
          <div className={`flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] ${com>125? "bg-gray-500 border-[1px] border-gray-400 ": "bg-gradient-to-b from-green-400/40 border-[1px] border-green-400 "}rounded-lg pb-6 px-2 pt-2 max-[360px]:w-full m-2`}>
            <img
              src={common}
              className={`${com>125? "shadow-gray-400/20" : "shadow-green-400/20"} w-full rounded-lg shadow-xl `}
            ></img>
            <h2 className={`${com>125? "text-gray-300 ":"text-green-200 " }font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]`}>
              5 MATIC
            </h2>
            <button
              id="mint common"
              className={`${com>125? " bg-gray-600 text-gray-200 border-gray-300 ": " bg-green-600 text-green-200 border-green-300 "}font-bold text-3xl max-[768px]:w-[80%] max-[768px]:text-[5.5vw]  max-[768px]:py-3  border-2 rounded-xl px-10 py-4 `}
            >
              MINT
            </button>
          </div>

          <div className={`flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] ${rar>100? "bg-gray-500 border-[1px] border-gray-400 ": "bg-gradient-to-b from-blue-400/40 border-[1px] border-blue-400 "} rounded-lg pb-6 px-2 pt-2 max-[360px]:w-full m-2`}>
            <img
              src={Rare}
              className={`${rar>100? "shadow-gray-400/20" : "shadow-blue-400/20"} w-full rounded-lg shadow-xl `}
            ></img>
            <h2 className={`${rar>100? "text-gray-300 ":"text-blue-200 " }font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]`}>
              7 MATIC
            </h2>
            <button
              id="mint rare"
              className={`${rar>100? " bg-gray-600 text-gray-200 border-gray-300 ": " bg-blue-600 text-blue-200 border-blue-300 "}font-bold text-3xl max-[768px]:w-[80%] max-[768px]:text-[5.5vw]  max-[768px]:py-3  border-2 rounded-xl px-10 py-4 `}
            >
              MINT
            </button>
          </div>

          <div className={`flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] ${epi>50? "bg-gray-500 border-[1px] border-gray-400 ": "bg-gradient-to-b from-purple-400/40 border-[1px] border-purple-400 "} rounded-lg pb-6 px-2 pt-2 max-[360px]:w-full m-2`}>
            <img
              src={epic}
              className={`w-full rounded-lg shadow-xl ${epi>50? "shadow-gray-400/20" : "shadow-purple-400/20 "}`}
            ></img>
            <h2 className={` ${epi>50? "text-gray-300" : "text-purple-200"} font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]`}>
              9 MATIC
            </h2>
            <button
              id="mint epic"
              className={`${epi>50? " bg-gray-600 text-gray-200 border-gray-300 ": " bg-purple-600 text-purple-200 border-purple-300 "}font-bold text-3xl max-[768px]:w-[80%] max-[768px]:text-[5.5vw]  max-[768px]:py-3  border-2 rounded-xl px-10 py-4 `}
            >
              MINT
            </button>
          </div>

          <div className={`flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] ${leg>25? "bg-gray-500 border-[1px] border-gray-400 ": "bg-gradient-to-b from-yellow-400/40 border-[1px] border-yellow-400 "} rounded-lg pb-6 px-2 pt-2 max-[360px]:w-full m-2`}>
            <img
              src={Legendary}
              className={`w-full rounded-lg shadow-xl ${leg>25? "shadow-gray-400/20" : "shadow-yellow-400/20 "}`}
            ></img>
            <h2 className={` ${leg>25? "text-gray-300" : "text-yellow-200"} font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]`}>
              11 MATIC
            </h2>
            <button
              id="mint legendary"
              className={`${leg>25? " bg-gray-600 text-gray-200 border-gray-300 ": " bg-yellow-500 text-yellow-100 border-yellow-300 "}font-bold text-3xl max-[768px]:w-[80%] max-[768px]:text-[5.5vw]  max-[768px]:py-3  border-2 rounded-xl px-10 py-4 `}
            >
              MINT
            </button>
          </div>
        </div>

        {/* <button
					id="withdraw"
					className="bg-white rounded-xl font-Montserrat text-2xl p-3 font-semibold border-2 border-blue-400"
				>
					Withdraw
				</button> */}
        
        {isConnect ? (
          <div className="text-center">
            <h1
              className="pt-10 text-2xl font-bold text-blue-400  lg:text-4xl mb-10 "
              id="check"
            >
              YOUR MINTS
            </h1>
            <table className="w-[60vw] max-[768px]:w-[90vw] border-blue-400 font-Montserrat mb-10">
              <thead className="bg-gradient-to-br from-slate-800 to-slate-700">
                <tr className="text-xl lg:text-2xl text-white font-semibold text-center">
                  <th className="p-3 w-[50vw] rounded-tl-2xl">Minted eggs</th>
                  <th className="p-3 w-[50vw] rounded-tr-2xl">Links</th>
                </tr>
              </thead>
              <tbody className="">
                {!isLoading &&
                  userData.map((data) => (
                    <tr>
                      <td
                        className={`p-3 border-b-[1px] border-slate-500 text-center font-Montserrat font-bold ${
                          data.name[0] === "R"
                            ? "text-blue-400"
                            : data.name[0] === "C"
                            ? "text-green-400"
                            : data.name[0] === "L"
                            ? "text-yellow-400"
                            : data.name[0] === "E"
                            ? "text-purple-400"
                            : null
                        } `}
                      >
                        {data.name}
                      </td>

                      <td className="p-3 border-b-[1px] border-slate-500 text-white text-center">
                        <a
                          href={`https://opensea.io/assets/matic/${addr}/${data.userMintedId}`}
                          className=" text-Montserrat hover:text-blue-300"
                        >
                          View on OpenSea
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {isLoading && (
              <div className=" w-full flex items-center justify-center my-10">
                <MutatingDots
                  height="100"
                  width="100"
                  color="#5fa5f9"
                  secondaryColor="#ffffff"
                  radius="12.5"
                  ariaLabel="mutating-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
        <div className="mt-40 w-screen py-10 bg-slate-900 text-center">
          <div
            href="mailto: abc@example.com"
            className="text-white font-Montserrat text-lg "
          >
            For any issues contact our Support Team
          </div>
		  <a
            href="mailto:realbeastverse@gmail.com"
            className="text-blue-400 font-semibold hover:text-blue-200 font-Montserrat text-lg "
          >
            Shoot us a Mail Here!
          </a>
        </div>
      </div>
    </>
  );
}

export default Mint;