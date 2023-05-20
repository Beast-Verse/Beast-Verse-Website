import React, { useState, useEffect } from "react";

//import beast from "../assets/beast.jpeg"
import { MutatingDots } from "react-loader-spinner";
import Footer from "./Footer";
import common from "../assets/Common.gif";
import epic from "../assets/Epic.gif";
import Legendary from "../assets/Legendary.gif";
import Rare from "../assets/Rare.gif";

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

  const loadingHandle = (e) => {
    setLoading(e);
  };

  const [account, setAccount] = useState(null);
  const [isConnect, setIsConnect] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [userData, setUserData] = useState([]);
  const [add, setAddress] = useState(" ");

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

	console.log(ADDRESS);
    setAddress(ADDRESS);

    const whitelisted = [
      "0xc9de0a09b6e547cf7e028aabb7b1f2f6941ad53f",
      "0xa92B24AC60A6B381E0eC2DD17d2a3339Cda24D84",
      "0xd3057d40d6538f32489CA3ce73e2A2E60405F0A1",
      "0x4012dBd303447EC2EF495f18c1f95CCf01a33594",
      "0xb1574f6638f835a292647D5E7e09Af91E947Bb2A",
      "0xDA626847B42e914FAa71E46055e57b20A066bed8",
      "0x071e2dbcf04cD810Cd1b89E3d8276D598f3B31E8",
      "0x9d7AF80C1c9007E280288714B3dd68Aa587342B3",
      "0x26c22e7cE4B374f7219398d0B90F354a780c2328",
      "0x5FDd13F8Bd76C4500DbC8eE9bdd1dD3D3ee041f9",
      "0x77e058DE3284F4e8bC9Aaa5bDa657E61e9c54114",
      "0x9eeab55272f38f624a56995cd719d577364e2a7c",
      "0x3a84ba8CAFb1730e72a3DA52456CB8D95034de9c",
      "0xebd269E7ED51EDE698CE92F41A8F45034c8CFe5B",
      "0x783433375a9829B647E28fe82F81A20989cDc8b9",
      "0x65b835ec6802b2C35b93092bBd76216BB3018F50",
      "38xCgnfcLEb2kP45L1ZT5L3BFzskhQqbE5",
      "0xE633567d20749bF0025a7C748c93542A413Eeb3A",
      "0xE2a45eA9F3F614aD325F4E02669B505157846669",
      "0x3E63a6fcabB3e8bbc9c9e11c95D014Ec46B49baa",
      "0x00a22e41cb5Ea46e643f8eC06526A9670c77fF1e",
      "0x09878440535ed004cc20732c19821befb7c04cDb",
      "0x2f40e27e1f3d960716eebe8587166e4bdbb33bcb97055e23c156c24132a34789",
      "0x3B904247bAC041E53a7e6842F7D08F3b6700779f",
      "0xDda4fE2Bf07bA47D4cc4ffb10f01c964f1aCE9e8",
      "0xD99100638eaA63C621E640170943dEFe9de1af10",
      "0x1ce256752fBa067675F09291d12A1f069f34f5e8",
      "0xc67Aa95B4AD61b6435d10567EC192e125aF7A0a0",
      "0xd762eb9a13821a93e5c02baefEC29fC1E785FaF2",
      "0xCfbA620CB5f1b6FeaAd4050e8494BDcB0edA5fbb",
      "0xF85304B2786613E9A802528ed3c2F0AeDCb3105D",
      "0xaaD1517820C1581B555EBF6A40E919884df2e79d",
      "0x312fcB201EC19398640b90d9b305F7926196A02b",
      "0xc0c157510F443067eDac00cc5b5E297E67315D53",
      "0xbc6b6652f244ff6b1c584503f558d3a152eb5a0e",
      "0x97a12F8b8aaED58922c49160F4a0C85E361162cF",
      "0x3e3d92339368fcefe40bc67c768b004f09cbb75f",
      "0xd762eb9a13821a93e5c02baefEC29fC1E785FaF2",
      "0xa92b24ac60a6b381e0ec2dd17d2a3339cda24d84",
      "0x95d0f0FB194718A6D82a3D7F85f73DCD9E716302",
      "0x50912A8ab9362D17D264DbE62989181f0f01c641",
      "0x82ceFB5b4D46B9079e45e7C6B6188EB2062c12F8",
      "0xc67Aa95B4AD61b6435d10567EC192e125aF7A0a0",
      "0x45eccf0a835570faf1039d15b31e531eb82ba963",
      "0xa259F8BB636793405F2B4f0CeEAbE8eC767A77fC",
      "0x7953b5040257e77B8D3Bc768F247c06fbc955a21",
      "0xc100438f86d7a4647F269523EE3A0b1De996eAAa",
      "0xf9837CE784A9d326853677dabaf2EAC4Ed84E2F7",
      "0xE607253Cd53C873D9bc26d427E943daADDbe0914",
      "0x7DAC2CE052AD5F39E0380568980220E8dcA26CC3",
      "0xAaA20CFb686CAe0B0482ad53701618426C8CeB46",
      "0x632C0480be31fD2234703553020815366A8116F1",
      "0x668A7ac8F92748499bB2F9813C20ff3278D38121",
    ];

    const size = whitelisted.length;

    var isthere;

    for (let i = 0; i < size; i++) {
      var check = whitelisted[i];

      if (account?.toUpperCase() === check?.toUpperCase()) {
        isthere = true;
        break;
      } else {
        isthere = false;
      }
    }

    if (isthere === true) {
      setIsWhitelisted(true);
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

	  console.log(await getCountCom());
	  console.log(await getCountEpi());
	  console.log(await getCountRar());
	  console.log(await getCountLeg());

      if ((await getCountCom()) < 125) {
        document.getElementById("mint common").onclick = async () => {
          setIsMinting(true);
          let comValue = await com();
          const comlink =
            "ipfs://QmbMx9vN1w5Ga9XhKFXu764xmq9QkmYaQbJ8n8V4qLXHPT/" +
            comValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till it egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .commonMint(account, comlink, comValue)
            .send({ from: account, value: "2000000000000000" })
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
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Common Egg #${comValue}! \n Reloading in 5 secs`;
                  setTimeout(() => {
                    window.location.reload();
                  }, 5000);
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

      if ((await getCountRar()) < 100) {
        document.getElementById("mint rare").onclick = async () => {
          setIsMinting(true);
          let rarValue = await rar();
          const rarlink =
            "ipfs://QmNgz8wJbitXX9bqtQU1527JoF9GAQnN7GFmHiEVESZrEE/" +
            rarValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till it egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .rareMint(account, rarlink, rarValue)
            .send({ from: account, value: "4000000000000000" })
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
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Rare Egg #${rarValue}! \n Reloading in 5 secs`;
                  setTimeout(() => {
                    window.location.reload();
                  }, 5000);
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
        document.getElementById("mint epic").onclick = async () => {
          setIsMinting(true);
          let epiValue = await epi();
          const epilink =
            "ipfs://QmSVtYkQ9AkDYjL9sWbdysyPLB8pSJCoQTPSNrvdYyAdV3/" +
            epiValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till it egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .epicMint(account, epilink, epiValue)
            .send({ from: account, value: "6000000000000000" })
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
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Epic Egg #${epiValue}! \n Reloading in 5 secs`;
                  setTimeout(() => {
                    window.location.reload();
                  }, 5000);
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
        document.getElementById("mint legendary").onclick = async () => {
          setIsMinting(true);
          let legValue = await leg();
          const leglink =
            "ipfs://QmQoj6dJwzqHWwuUvNRpwuJVYCdSMgjqDQeeyX4ZDyhsba/" +
            legValue +
            ".json";

          document.getElementById("wlonly").textContent =
            "Please wait till it egg is minted";
          document.getElementById("noview").classList.add("hidden");

          cont.methods
            .legendaryMint(account, leglink, legValue)
            .send({ from: account, value: "8000000000000000" })
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
                  document.getElementById(
                    "wlonly"
                  ).textContent = `Successfully minted Legendary Egg #${legValue}! \n Reloading in 5 secs`;
                  setTimeout(() => {
                    window.location.reload();
                  }, 5000);
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

      // if (account?.toUpperCase() === admin?.toUpperCase()) {
      // 	document.getElementById("withdraw").onclick = async () => {
      // 		cont.methods.withdraw().send({ from: account });
      // 	};
      // }

      setLoad(true);
    } else if (isthere === false) {
      console.log("Not whitelisted!");
    } else {
      alert("Install Metamask!");
    }
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
	console.log("Connecteth")
  }, [account, isConnect]);

  useEffect(() => {
    table();
	console.log("table");
  }, [load]);

  return (
    <>
      <div className="bg-gradient-to-b from-black to-slate-800 text-center min-h-[100vh] flex flex-col items-center justify-center max-[768px]:pt-10 max-[768px]:justify-start pb-0 p-2">
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
                        className="text-[1.2vw] max-[768px]:text-[5vw] bg-gradient-to-br from-slate-800 to duration-400 transition-all bg-slate-600 text-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/30 p-4 rounded-xl font-Montserrat font-semibold"
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
          <h2
            id="wlonly"
            className="my-10 text-[3vw] mx-auto w-[70%] font-Montserrat font-medium text-slate-400 lg:text-[3vw] flex justify-center items-center"
          >
            {isWhitelisted
              ? null
              : "You're not whitelisted! Wait till 21/05/23"}
          </h2>
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

        <div
          className={`${
            isConnect && isWhitelisted ? null : "hidden"
          } flex flex-row  max-[768px]:flex-wrap min-[768px]:mx-10`}
          id="noview"
        >
          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] bg-gradient-to-b from-green-400/40 border-[1px] border-green-400 rounded-lg pb-6 px-2 pt-2 max-[360px]:w-full m-2">
            <img
              src={common}
              className="w-full rounded-lg shadow-xl shadow-green-400/20"
            ></img>
            <h2 className="text-green-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">
              2 MATIC
            </h2>
            <button
              id="mint common"
              className="font-bold text-3xl max-[768px]:w-[80%] max-[768px]:text-[5.5vw]  max-[768px]:py-3  border-2 rounded-xl px-10 py-4  bg-green-600 text-green-200 border-green-300"
            >
              MINT
            </button>
          </div>

          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 bg-gradient-to-b from-blue-400/40 border-[1px] border-blue-400 rounded-lg pb-6 px-2 pt-2 max-[768px]:w-[45%] max-[360px]:w-full m-2">
            <img
              src={Rare}
              className="w-full rounded-lg shadow-xl shadow-blue-400/20"
            ></img>
            <h2 className="text-blue-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">
              4 MATIC
            </h2>
            <button
              id="mint rare"
              className="font-bold text-3xl max-[768px]:w-[80%] max-[768px]:text-[5.5vw]  max-[768px]:py-3  border-2 rounded-xl px-10 py-4  bg-[#007DBB] text-[#b4edff] border-[#93E5FF]"
            >
              MINT
            </button>
          </div>

          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 bg-gradient-to-b from-purple-400/40 border-[1px] border-purple-400 rounded-lg pb-6 px-2 pt-2 max-[768px]:w-[45%] max-[360px]:w-full m-2">
            <img
              src={epic}
              className="w-full rounded-lg shadow-xl shadow-purple-400/20"
            ></img>
            <h2 className="text-purple-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">
              6 MATIC
            </h2>
            <button
              id="mint epic"
              className="text-3xl max-[768px]:w-[80%] max-[768px]:py-3 max-[768px]:text-[5.5vw]  border-2 rounded-xl px-10 py-4 font-bold  bg-[#9124CB] text-[#e8b2fd] border-[#E093FF]"
            >
              MINT
            </button>
          </div>

          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 bg-gradient-to-b from-yellow-400/40 border-[1px] border-yellow-400 rounded-lg pb-6 px-2 pt-2 max-[768px]:w-[45%] max-[360px]:w-full m-2">
            <img
              src={Legendary}
              className="w-full rounded-lg shadow-xl shadow-yellow-400/20"
            ></img>
            <h2 className="text-yellow-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">
              8 MATIC
            </h2>
            <button
              id="mint legendary"
              className="text-3xl max-[768px]:w-[80%] max-[768px]:text-[5.5vw]  max-[768px]:py-3  border-2 rounded-xl px-10 py-4 font-bold  bg-[#D8D600] text-[#feffcc] border-[#FEFFB6]"
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
          <div>
            <h1
              className="pt-10 text-2xl font-bold text-blue-400  lg:text-4xl mb-10"
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
                          href={`https://opensea.io/assets/mumbai/${add}/${data.userMintedId}`}
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
        <div className="mt-40 w-screen bg-gradient-to-br from-blue-900 py-10 via-slate-800 to-slate-900">
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