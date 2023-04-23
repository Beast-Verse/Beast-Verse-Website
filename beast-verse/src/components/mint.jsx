import React from "react";
//import beast from "../assets/beast.jpeg"
import Footer from "./Footer";
import common from "../assets/Commons.gif";
import epic from "../assets/Epics.gif";
import Legendary from "../assets/Legendarys.gif";
import Rare from "../assets/Rares.gif";

import Web3 from "web3";
import axios from "axios";
const web3 = new Web3(window.ethereum);

var account = null;
var contract = null;
var ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "com",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "commonMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "epi",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epicMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "leg",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "legendaryMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "message",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rar",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rareMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

var ADDRESS = "0xce33815152805bd7bf4507A03C67aCf418F1c85E";

const admin = "0xc67Aa95B4AD61b6435d10567EC192e125aF7A0a0";

async function connect() {
  if (window.ethereum) {
    console.log("Metamask is here.");
    console.log(web3.version);

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    account = accounts[0];
    console.log(typeof account);

    if (account != null) {
      document.getElementById("buttonconnect").textContent =
        "Wallet already Connected";
      document.getElementById("address").textContent = account;
      document.getElementById("buttonconnect").classList.remove("bg-white");
      document.getElementById("buttonconnect").classList.add("text-gray-500");
      document.getElementById("buttonconnect").classList.add("bg-gray-300");
    }

    const whitelisted = [
      "0xc9de0a09b6e547cf7e028aabb7b1f2f6941ad53f",
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
	  "0x97a12F8b8aaED58922c49160F4a0C85E361162cF"
    ];

    const size = whitelisted.length;

    var isthere;

    // console.log("hi");

    for (let i = 0; i < size; i++) {
      var check = whitelisted[i];
      // console.log(check);
      // console.log(account);

      if (account.toUpperCase() === check.toUpperCase()) {
        console.log("hi");
        isthere = true;
        // console.log(isthere);
        break;
        // console.log(isthere);
      } else {
        isthere = false;
      }
    }

    console.log(isthere);

    if (isthere === true) {
      console.log("whitelisted");

      contract = new web3.eth.Contract(ABI, ADDRESS);

      // console.log(isthere);
      //   var com = parseInt(await contract.methods.com().call()) + 1;
      //   var rar = parseInt(await contract.methods.rar().call()) + 1;
      //   var epi = parseInt(await contract.methods.epi().call()) + 1;
      //   var leg = parseInt(await contract.methods.leg().call()) + 1;

      let url = "https://bv-backend-self.vercel.app/api";

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

      await contract.methods.message().call();

      console.log(await contract.methods.MAX_SUPPLY().call());

	  console.log("Common", await getCountCom())
	  console.log("Rare", await getCountRar())
	  console.log("Epic", await getCountEpi())
	  console.log("Legendary", await getCountEpi())

      if ((await getCountCom()) < 126) {
        document.getElementById("mint common").onclick = async () => {
          let comValue = await com();
          const comlink =
            "ipfs://QmVu2Q9vf5mrV86RXsqTTKVApeWxZGsGvJ9z8kaPo4JvVE/" +
            comValue +
            ".json";
          console.log(comlink);
          contract.methods
            .commonMint(account, comlink, comValue)
            .send({ from: account, value: "10000000000000000" })
			.then((res) => {
				console.log(res);
				axios.put(url + "/pop", {
					"index": comValue,
					"rarity": "common"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountCom())
				})
				.catch((err) => console.log(err))
			})
			.catch(async (err) => {
				console.log(err);
				axios.put(url + "/flip", {
					"index": comValue,
					"rarity": "common"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountCom())
				})
				.catch((err) => console.log(err))
			})
			
          //   setTimeout(()=> {
          //     window.location.reload();
          //  }
          //  ,20000);
        };
      }

      if ((await getCountRar()) < 101) {
        document.getElementById("mint rare").onclick = async () => {
          let rarValue = await rar();
          const rarlink =
            "ipfs://Qmarxrtu7xsCJeuhLb93QYCeEnrjqH5jhLgzcdXkvWoJ1G/" +
            rarValue +
            ".json";
		  console.log(rarlink);
          contract.methods
            .rareMint(account, rarlink, rarValue)
            .send({ from: account, value: "20000000000000000" })
			.then((res) => {
				console.log(res);
				axios.put(url + "/pop", {
					"index": rarValue,
					"rarity": "rare"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountRar())
				})
				.catch((err) => console.log(err))
			})
			.catch(async (err) => {
				console.log(err);
				axios.put(url + "/flip", {
					"index": rarValue,
					"rarity": "rare"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountRar())
				})
				.catch((err) => console.log(err))
			})
        };
      }

      if ((await getCountEpi()) < 51) {
        document.getElementById("mint epic").onclick = async () => {
          let epiValue = await epi();
          const epilink =
            "ipfs://QmaEuJx1B2zNrC7imS73Jt36abX1rwPht7M6WhSPkb1HFP/" +
            epiValue +
            ".json";
		  console.log(epilink);
          contract.methods
            .epicMint(account, epilink, epiValue)
            .send({ from: account, value: "30000000000000000" })
			.then((res) => {
				console.log(res);
				axios.put(url + "/pop", {
					"index": epiValue,
					"rarity": "epic"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountEpi())
				})
				.catch((err) => console.log(err))
			})
			.catch(async (err) => {
				console.log(err);
				axios.put(url + "/flip", {
					"index": epiValue,
					"rarity": "epic"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountEpi())
				})
				.catch((err) => console.log(err))
			})
        };
      }

      if ((await getCountLeg()) < 26) {
        document.getElementById("mint legendary").onclick = async () => {
          let legValue = await leg();
          const leglink =
            "ipfs://QmVy3eFMxT3cimV5B9NiDxo4ZviFUNSQsPS8QVJaEhVBTm/" +
            legValue +
            ".json";
		  console.log(leglink)
          contract.methods
            .legendaryMint(account, leglink, legValue)
            .send({ from: account, value: "40000000000000000" })
			.then((res) => {
				console.log(res);
				axios.put(url + "/pop", {
					"index": legValue,
					"rarity": "legendary"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountLeg())
				})
				.catch((err) => console.log(err))
			})
			.catch(async (err) => {
				console.log(err);
				axios.put(url + "/flip", {
					"index": legValue,
					"rarity": "legendary"
				})
				.then(async (res) => {
					console.log(res)
					console.log(await getCountLeg())
				})
				.catch((err) => console.log(err))
			})
        };
      }

      if (account.toUpperCase() === admin.toUpperCase()) {
        document.getElementById("withdraw").onclick = async () => {
          contract.methods.withdraw().send({ from: account });
        };
      }

      console.log(await contract.methods.totalSupply().call());

      //   console.log(await contract.methods.com().call());
      //   console.log(await contract.methods.rar().call());
      //   console.log(await contract.methods.epi().call());
      //   console.log(await contract.methods.leg().call());
    } else if (isthere === false) {
      console.log("Not whitelisted!");
      document.getElementById("check").textContent =
        "WALLET IS NOT WHITELISTED!";
      document.getElementById("wlonly").textContent =
        "Your wallet was not whitelisted! \n Please wait for the General Mint to start on 21/05/23! :D";
      document.getElementById("noview").classList.add("hidden");
    } else {
      console.log("no metamask");
    }
  }
}

function Mint() {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-slate-800 text-center min-h-[100vh] flex flex-col items-center justify-center max-[768px]:pt-10 max-[768px]:justify-start p-2">
        <h1
          className="pt-10 text-4xl font-bold text-blue-400  lg:text-6xl mb-10"
          id="check"
        >
          MINT YOUR EGGS
        </h1>
        <button
          className="bg-white p-4 rounded-xl font-Montserrat font-semibold"
          onClick={connect}
          id="buttonconnect"
        >
          Connect your wallet
        </button>
        <h3
          id="address"
          className="mt-10 text-[2vw] mx-auto w-[70%] font-Montserrat font-medium text-green-400 lg:text-[1.5vw]"
        ></h3>
        <h2
          id="wlonly"
          className="mt-10 text-[3vw] mx-auto w-[70%] font-Montserrat font-medium text-slate-400 lg:text-[3vw]"
        ></h2>
        <div
          className="flex flex-row max-[768px]:flex-row max-[768px]:flex-wrap min-[768px]:mx-10"
          id="noview"
        >
          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] max-[360px]:w-full m-2">
            <img
              src={common}
              className="w-full rounded-lg shadow-xl shadow-[#93FF94]/40 brightness-150"
            ></img>
            <button
              id="mint common"
              className="font-bold text-3xl max-[768px]:text-2xl max-[768px]:w-full max-[768px]:py-1  border-2 rounded-xl px-10 py-4 bg-[#00BB02] text-[#c5ffc6] border-[#93FF94]"
            >
              MINT
            </button>
          </div>

          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] max-[360px]:w-full m-2">
            <img
              src={Rare}
              className="w-full rounded-lg shadow-xl shadow-[#93E5FF]/40 brightness-150"
            ></img>
            <button
              id="mint rare"
              className="font-bold text-3xl max-[768px]:text-2xl max-[768px]:w-full max-[768px]:py-1  border-2 rounded-xl px-10 py-4  bg-[#007DBB] text-[#b4edff] border-[#93E5FF]"
            >
              MINT
            </button>
          </div>

          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] max-[360px]:w-full m-2">
            <img
              src={epic}
              className="w-full rounded-lg shadow-xl shadow-[#E093FF]/40 brightness-150"
            ></img>
            <button
              id="mint epic"
              className="text-3xl max-[768px]:text-2xl max-[768px]:w-full max-[768px]:py-1  border-2 rounded-xl px-10 py-4 font-bold  bg-[#9124CB] text-[#e8b2fd] border-[#E093FF]"
            >
              MINT
            </button>
          </div>

          <div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] max-[360px]:w-full m-2">
            <img
              src={Legendary}
              className="w-full rounded-lg shadow-xl shadow-[#FEFFB6]/40 brightness-150"
            ></img>
            <button
              id="mint legendary"
              className="text-3xl max-[768px]:text-2xl max-[768px]:w-full max-[768px]:py-1  border-2 rounded-xl px-10 py-4 font-bold  bg-[#D8D600] text-[#feffcc] border-[#FEFFB6]"
            >
              MINT
            </button>
          </div>
        </div>
        <button
          id="withdraw"
          className="bg-white rounded-xl font-Montserrat text-2xl p-3 font-semibold border-2 border-blue-400"
        >
          Withdraw
        </button>
      </div>
    </>
  );
}

export default Mint;
