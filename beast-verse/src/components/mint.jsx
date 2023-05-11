import React, { useState, useEffect } from "react";

//import beast from "../assets/beast.jpeg"
import { MutatingDots } from 'react-loader-spinner';
import Footer from "./Footer";
import common from "../assets/Common.gif";
import epic from "../assets/Epic.gif";
import Legendary from "../assets/Legendary.gif";
import Rare from "../assets/Rare.gif";

import Web3 from "web3";
import axios from "axios";
const web3 = new Web3(window.ethereum);

// var account = null;
var contract = null;
var ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "commonMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "epicMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "legendaryMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rareMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "com",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "epi",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "leg",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "message",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintRate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "rar",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var ADDRESS = "0xD1fb46b8354d4e6c95C1Bd1009b75cd2f976328b";

const admin = "0x1ce256752fBa067675F09291d12A1f069f34f5e8";

function Mint() {

	const [isMinting, setIsMinting] = useState(false);
	const [isLoading, setLoading] = useState(false);
    const loadingHandle = (e)=>{
        setLoading(e);
    }

	const [account, setAccount] = useState(null);
	const [isConnect, setIsConnect] = useState(false);
	const [isWhitelisted, setIsWhitelisted] = useState(false);
	const [userData, setUserData] = useState([]);

	async function connect() {
		let accounts;
	  
		if (window.ethereum) {
		  // Modern dapp browsers (including mobile Chrome with MetaMask)
		  try {
			await window.ethereum.request({ method: "eth_requestAccounts" });
			accounts = await window.ethereum.request({ method: "eth_accounts" });
		  } catch (error) {
			console.error(error);
		  }
		} else if (window.web3) {
		  // Legacy dapp browsers (e.g., older versions of MetaMask)
		  const web3 = new Web3(window.web3.currentProvider);
		  try {
			accounts = await web3.eth.getAccounts();
		  } catch (error) {
			console.error(error);
		  }
		} else {
		  // Non-dapp browsers
		  console.log("Please install MetaMask or use a dapp browser");
		  return;
		}
	  
		if (accounts && accounts.length > 0) {
		  localStorage.setItem("account", accounts[0]);
		  setAccount(accounts[0]);
		  console.log(typeof account);
		  console.log(accounts[0]);
		}
	  }
	  

	async function disconnect() {
		console.log("Disconnect");
		setAccount(null);
		setIsConnect(false);
		localStorage.removeItem("account");
	
	}

	const connectEth = async () => {
		setUserData([]);
		if (window.ethereum) {

			const localAcc = localStorage.getItem("account")

			if (localAcc != null) {
				setIsConnect(true);
				setAccount(localAcc);
			}

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
				"0x632C0480be31fD2234703553020815366A8116F1"
			];

			const size = whitelisted.length;

			var isthere;

			// console.log("hi");

			for (let i = 0; i < size; i++) {
				var check = whitelisted[i];
				// console.log(check);
				// console.log(account);

				if (account?.toUpperCase() === check?.toUpperCase()) {
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
				setIsWhitelisted(true);
				contract = new web3.eth.Contract(ABI, ADDRESS);

				// console.log(isthere);
				//   var com = parseInt(await contract.methods.com().call()) + 1;
				//   var rar = parseInt(await contract.methods.rar().call()) + 1;
				//   var epi = parseInt(await contract.methods.epi().call()) + 1;
				//   var leg = parseInt(await contract.methods.leg().call()) + 1;

				//   let url = "https://bv-backend-self.vercel.app/api";
				let url = "https://bvbackend-production.up.railway.app/api";

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
					// console.log(res);
					return res.data.count;
				};

				await contract.methods.message().call();

				setLoading(true);
				console.log(await contract.methods.MAX_SUPPLY().call());

				console.log("Common", await getCountCom())
				console.log("Rare", await getCountRar())
				console.log("Epic", await getCountEpi())
				console.log("Legendary", await getCountLeg())

				var balance = await contract.methods.balanceOf(account).call();
				console.log("Total held by the account: ", balance);

				
				const tempData = [];

				for(let i=0; i<balance; i++){
					const userMintedId = parseInt(await contract.methods.tokenOfOwnerByIndex(account, i).call());
					const tokenURI = await contract.methods.tokenURI(userMintedId).call();
					const metadata = `https://ipfs.io/ipfs/${tokenURI.substr(7)}`;
					const meta = await fetch(metadata);
					const json = await meta.json();
					const name = json["name"];


					tempData.push({userMintedId, name, i});
				}
				

				setUserData(tempData);
				setLoading(false);
				// for(let j=0; j<tempData.length; j++){
				// 	const metadata = tempData.tokenURI?.substr(7);
				// 	console.log(metadata);
				// }


				// console.log(userData);

				if ((await getCountCom()) < 125) {
					document.getElementById("mint common").onclick = async () => {
						setIsMinting(true);
						let comValue = await com();
						const comlink = "ipfs://QmbMx9vN1w5Ga9XhKFXu764xmq9QkmYaQbJ8n8V4qLXHPT/" + comValue + ".json";
						console.log(comlink);

						document.getElementById("wlonly").textContent = "Please wait till it egg is minted"
						document.getElementById("noview").classList.add("hidden")


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
										console.log("hemlo")
										console.log(res)
										console.log(await getCountCom())
										setIsMinting(false);
										document.getElementById("wlonly").textContent = `Successfully minted Common Egg #${comValue}! \n Reloading in 5 secs`
										console.log(await contract.methods.totalSupply().call());
										setTimeout(() => {
											window.location.reload();
										}
											, 5000);
									})
									.catch((err) => console.log(err))
								axios.post(url + "/write" , {
									walletID: account,
									nftID: `${comValue}`,
									rarity:"Common"
								}).then((res)=>{
									console.log(res)
								}).catch((err)=>{console.log(err)})
							})
							.catch(async (err) => {
								console.log(err);
								document.getElementById("wlonly").textContent = `Transaction for Common Egg was rejected! \n Reloading in 2s`

								axios.put(url + "/flip", {
									"index": comValue,
									"rarity": "common"
								})
									.then(async (res) => {
										console.log(res)
										console.log(await getCountCom())
									})

									.catch((err) => console.log(err))

								setTimeout(() => {
									window.location.reload();
								}
									, 3000);
							})

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
						console.log(rarlink);

						document.getElementById("wlonly").textContent = "Please wait till it egg is minted"
						document.getElementById("noview").classList.add("hidden")

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
										setIsMinting(false);
										console.log(await getCountRar())
										document.getElementById("wlonly").textContent = `Successfully minted Rare Egg #${rarValue}! \n Reloading in 5 secs`
										setTimeout(() => {
											window.location.reload();
										}
											, 5000);
									})
									.catch((err) => console.log(err))
							})
							.catch(async (err) => {
								console.log(err);
								document.getElementById("wlonly").textContent = `Transaction for Rare Egg was rejected! \n Reloading in 2s`
								axios.put(url + "/flip", {
									"index": rarValue,
									"rarity": "rare"
								})
									.then(async (res) => {
										console.log(res)
										console.log(await getCountRar())
									})
									.catch((err) => console.log(err))

								setTimeout(() => {
									window.location.reload();
								}
									, 3000);
							})
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
						console.log(epilink);

						document.getElementById("wlonly").textContent = "Please wait till it egg is minted"
						document.getElementById("noview").classList.add("hidden")


						contract.methods
							.epicMint(account, epilink, epiValue)
							.send({ from: account, value: "30000000000000000" })
							.then((res) => {
								console.log(res);
								// document.getElementById("wlonly").textContent = `Wait till the egg is minted`
								axios.put(url + "/pop", {
									"index": epiValue,
									"rarity": "epic"
								})
									.then(async (res) => {
										console.log(res)
										console.log(await getCountEpi())
										setIsMinting(false);
										document.getElementById("wlonly").textContent = `Successfully minted Epic Egg #${epiValue}! \n Reloading in 5 secs`
										setTimeout(() => {
											window.location.reload();
										}
											, 5000);
									})
									.catch((err) => console.log(err))
							})
							.catch(async (err) => {
								console.log(err);
								document.getElementById("wlonly").textContent = `Transaction for Epic Egg was rejected! \n Reloading in 2s`
								axios.put(url + "/flip", {
									"index": epiValue,
									"rarity": "epic"
								})
									.then(async (res) => {
										console.log(res)
										console.log(await getCountEpi())
									})
									.catch((err) => console.log(err))

								setTimeout(() => {
									window.location.reload();
								}
									, 3000);
							})
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
						console.log(leglink)

						document.getElementById("wlonly").textContent = "Please wait till it egg is minted"
						document.getElementById("noview").classList.add("hidden")


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
										setIsMinting(false);
										document.getElementById("wlonly").textContent = `Successfully minted Legendary Egg #${legValue}! \n Reloading in 5 secs`
										setTimeout(() => {
											window.location.reload();
										}
											, 5000);
									})
									.catch((err) => console.log(err))
							})
							.catch(async (err) => {
								console.log(err);
								document.getElementById("wlonly").textContent = `Transaction for Legendary Egg was rejected! \n Reloading in 2s`;
								axios.put(url + "/flip", {
									"index": legValue,
									"rarity": "legendary"
								})
									.then(async (res) => {
										console.log(res)
										console.log(await getCountLeg())
									})
									.catch((err) => console.log(err))
								setTimeout(() => {
									window.location.reload();
								}
									, 3000);
							})
					};
				}

				if (account?.toUpperCase() === admin?.toUpperCase()) {
					document.getElementById("withdraw").onclick = async () => {
						contract.methods.withdraw().send({ from: account });
					};
				}

				console.log(await contract.methods.totalSupply().call());

			} else if (isthere === false) {
				console.log("Not whitelisted!");
				// document.getElementById("check").textContent ="WALLET IS NOT WHITELISTED!";
				// document.getElementById("wlonly").textContent ="Your wallet was not whitelisted! \n Please wait for the General Mint to start on 21/05/23! :D";
				// document.getElementById("noview").classList.add("hidden");
			} else {
				alert("Install Metamask!");
			}
		}

	}

	useEffect(()=>{
		connectEth();
	},[account, isConnect]
	)


	return (
		<>

			<div className="bg-gradient-to-b from-black to-slate-800 text-center min-h-[100vh] flex flex-col items-center justify-center max-[768px]:pt-10 max-[768px]:justify-start p-2">
				
				<h1
					className="pt-10 text-4xl font-bold text-blue-400  lg:text-6xl mb-10"
					id="check"
				>
					MINT YOUR EGGS
				</h1>

				<div className={`${isConnect?" flex flex-row gap-4 items-center justify-center ": null}`}>
				<button

					className={`${isConnect? "text-gray-500 bg-gray-300 col-span-2 max-[768px]:text-[2.5vw]" : "text-[1.2vw] max-[768px]:text-[5vw] bg-gradient-to-br from-slate-800 to duration-400 transition-all bg-slate-600 text-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/30"} p-4 rounded-xl font-Montserrat font-semibold`}

					onClick={connect}
					id="buttonconnect"
				>
		


					{isConnect ? `${account.substring(0,7)}...${account.substring(38,44)}` : "Connect your wallet"}
				</button>
				
				{isConnect && <button
					className={`bg-red-500  hover:bg-red-700 text-white p-4 rounded-xl font-Montserrat font-semibold col-span-1 `}
					onClick={disconnect}
					id="buttonconnect">
					Disconnect
				</button>}
				</div>
				
				
				{
				 
				isConnect? <h2
					id="wlonly"
					className="my-10 text-[3vw] mx-auto w-[70%] font-Montserrat font-medium text-slate-400 lg:text-[3vw] flex justify-center items-center">
						{isWhitelisted ? null : "You're not whitelisted! Wait till 21/05/23"}
					</h2>: null
					
				}
				{
					isMinting && <div className=" w-full flex items-center justify-center my-10"><MutatingDots 
					height="100"
					width="100"
					color="#5fa5f9"
					secondaryColor= '#ffffff'
					radius='12.5'
					ariaLabel="mutating-dots-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				  /></div>
				}
				
				
				<div className={`${isConnect && isWhitelisted? null: "hidden"} flex flex-row  max-[768px]:flex-wrap min-[768px]:mx-10`} id="noview">
					<div className="flex flex-col justify-center items-center min-[768px]:gap-16 max-[768px]:gap-5 max-[768px]:w-[45%] bg-gradient-to-b from-green-400/40 border-[1px] border-green-400 rounded-lg pb-6 px-2 pt-2 max-[360px]:w-full m-2">
						<img
							src={common}
							className="w-full rounded-lg shadow-xl shadow-green-400/20"
						></img>
						<h2 className="text-green-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">2 MATIC</h2>
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
						<h2 className="text-blue-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">4 MATIC</h2>
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
						<h2 className="text-purple-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">6 MATIC</h2>
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
						<h2 className="text-yellow-200 font-Montserrat font-bold text-2xl min-[768px]:text-[2rem] min-[1024px]:text-[2.5rem]">8 MATIC</h2>
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
				{
					isConnect ? (
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

									{
									 !isLoading &&
									userData.map((data)=> (<tr>
										<td className={`p-3 border-b-[1px] border-slate-500 text-center font-Montserrat font-bold ${data.name[0]==='R'? "text-blue-400": data.name[0]==="C"? "text-green-400" : data.name[0]==="L"? "text-yellow-400": data.name[0]==="E"? "text-purple-400": null} `}>{data.name}</td>
										{console.log(data.name[0])}
										<td className="p-3 border-b-[1px] border-slate-500 text-white text-center"><a href={`https://testnets.opensea.io/assets/mumbai/0xD1fb46b8354d4e6c95C1Bd1009b75cd2f976328b/${data.userMintedId}`} className=" text-Montserrat hover:text-blue-300">View on OpenSea</a></td>
										

									</tr>))
									
									}
								</tbody>
							</table>
							{isLoading && <div className=" w-full flex items-center justify-center my-10"><MutatingDots 
									height="100"
									width="100"
									color="#5fa5f9"
									secondaryColor= '#ffffff'
									radius='12.5'
									ariaLabel="mutating-dots-loading"
									wrapperStyle={{}}
									wrapperClass=""
									visible={true}
								  /></div>}
						</div>
					) : (
						<div></div>
					)
				}

			</div>
		</>
	);
}

export default Mint;
