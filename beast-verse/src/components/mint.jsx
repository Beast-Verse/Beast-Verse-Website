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
import mintstop from "../assets/mintstop.png"
// import { useAccount, useConnect } from 'wagmi'
// global.Buffer = global.Buffer || require("buffer").Buffer;

// const web3 = new Web3(window.ethereum);

// var cont = null;

// const admin = "0x1ce256752fBa067675F09291d12A1f069f34f5e8";

function Mint() {
  // const [isMinting, setIsMinting] = useState(false);
  // const [isLoading, setLoading] = useState(false);
  // const [contra, setContract] = useState([]);
  // const [load, setLoad] = useState(false);
  // const[isMinted,setIsMinted]=useState(false);
  // const[tweety,setTweet]=useState("");
  // const[com, setCom] = useState(null);
  // const[rar, setRar] = useState(null);
  // const[epi, setEpi] = useState(null);
  // const[leg, setLeg] = useState(null);
  // const loadingHandle = (e) => {
  //   setLoading(e);
  // };

  // const [account, setAccount] = useState(null);
  // const [isConnect, setIsConnect] = useState(false);

  // const [userData, setUserData] = useState([]);
  // const [addr, setAddress] = useState(" ");

  // const { address, isConnecting, isDisconnected } = useAccount({
  //   onConnect: ({ address, isReconnected, connector: activeConnector }) => {
  //     setAccount(address);
  //     setIsConnect(true);
  //   },
  //   onDisconnect() {
  //     setAccount(null);
  //     setIsConnect(false);
  //   },
  // });

  // const connectEth = async () => {
  //   setUserData([]);

  //   let url = "https://bvbackend-production.up.railway.app/api";

  //   const contractabi = await axios.get(url + "/getAbiandAddress");
  //   const ABI = "0xe51f9dD4681F1bdB7fe2C52e5193457c784f25d6";
  //   const ADDRESS = [
  //     {
  //       "inputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "constructor"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "approved",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Approval",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": false,
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "ApprovalForAll",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "approve",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "burn",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "string",
  //           "name": "uri",
  //           "type": "string"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "commonMint",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "string",
  //           "name": "uri",
  //           "type": "string"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "epicMint",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "string",
  //           "name": "uri",
  //           "type": "string"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "legendaryMint",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint16",
  //           "name": "_CM",
  //           "type": "uint16"
  //         },
  //         {
  //           "internalType": "uint16",
  //           "name": "_RM",
  //           "type": "uint16"
  //         },
  //         {
  //           "internalType": "uint16",
  //           "name": "_EM",
  //           "type": "uint16"
  //         },
  //         {
  //           "internalType": "uint16",
  //           "name": "_LM",
  //           "type": "uint16"
  //         },
  //         {
  //           "internalType": "uint64",
  //           "name": "_CM_mintrate",
  //           "type": "uint64"
  //         },
  //         {
  //           "internalType": "uint64",
  //           "name": "_RM_mintrate",
  //           "type": "uint64"
  //         },
  //         {
  //           "internalType": "uint64",
  //           "name": "_EM_mintrate",
  //           "type": "uint64"
  //         },
  //         {
  //           "internalType": "uint64",
  //           "name": "_LM_mintrate",
  //           "type": "uint64"
  //         }
  //       ],
  //       "name": "nextPhase",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "previousOwner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "newOwner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "OwnershipTransferred",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "pause",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": false,
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "Paused",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "string",
  //           "name": "uri",
  //           "type": "string"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "rareMint",
  //       "outputs": [],
  //       "stateMutability": "payable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "renounceOwnership",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "bytes",
  //           "name": "data",
  //           "type": "bytes"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "setApprovalForAll",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Transfer",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "transferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "newOwner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "transferOwnership",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "unpause",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": false,
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "Unpaused",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "withdraw",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "balanceOf",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "CM",
  //       "outputs": [
  //         {
  //           "internalType": "uint16",
  //           "name": "",
  //           "type": "uint16"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "CM_mintrate",
  //       "outputs": [
  //         {
  //           "internalType": "uint64",
  //           "name": "",
  //           "type": "uint64"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "EM",
  //       "outputs": [
  //         {
  //           "internalType": "uint16",
  //           "name": "",
  //           "type": "uint16"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "EM_mintrate",
  //       "outputs": [
  //         {
  //           "internalType": "uint64",
  //           "name": "",
  //           "type": "uint64"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "getApproved",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "isApprovedForAll",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "LM",
  //       "outputs": [
  //         {
  //           "internalType": "uint16",
  //           "name": "",
  //           "type": "uint16"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "LM_mintrate",
  //       "outputs": [
  //         {
  //           "internalType": "uint64",
  //           "name": "",
  //           "type": "uint64"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "name",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "owner",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "Owner",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "ownerOf",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "paused",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "RM",
  //       "outputs": [
  //         {
  //           "internalType": "uint16",
  //           "name": "",
  //           "type": "uint16"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "RM_mintrate",
  //       "outputs": [
  //         {
  //           "internalType": "uint64",
  //           "name": "",
  //           "type": "uint64"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes4",
  //           "name": "interfaceId",
  //           "type": "bytes4"
  //         }
  //       ],
  //       "name": "supportsInterface",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "symbol",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "index",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "tokenByIndex",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "index",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "tokenOfOwnerByIndex",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "tokenURI",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "totalSupply",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     }
  //   ];

  //   setAddress(ADDRESS);

    
  //     setContract(cont);

  //     let com = async () => {
  //       let res = await axios.get(url + "/getRandom", {
  //         params: {
  //           rarity: "common",
  //         },
  //       });
  //       return res.data.index;
  //     };
  //     let rar = async () => {
  //       let res = await axios.get(url + "/getRandom", {
  //         params: {
  //           rarity: "rare",
  //         },
  //       });
  //       return res.data.index;
  //     };
  //     let epi = async () => {
  //       let res = await axios.get(url + "/getRandom", {
  //         params: {
  //           rarity: "epic",
  //         },
  //       });
  //       return res.data.index;
  //     };
  //     let leg = async () => {
  //       let res = await axios.get(url + "/getRandom", {
  //         params: {
  //           rarity: "legendary",
  //         },
  //       });
  //       return res.data.index;
  //     };

  //     let getCountCom = async () => {
  //       let res = await axios.get(url + "/count", {
  //         params: {
  //           rarity: "common",
  //           total: 1250,
  //         },
  //       });
  //       return res.data.count;
  //     };
  //     let getCountRar = async () => {
  //       let res = await axios.get(url + "/count", {
  //         params: {
  //           rarity: "rare",
  //           total: 1000,
  //         },
  //       });
  //       return res.data.count;
  //     };
  //     let getCountEpi = async () => {
  //       let res = await axios.get(url + "/count", {
  //         params: {
  //           rarity: "epic",
  //           total: 500,
  //         },
  //       });
  //       return res.data.count;
  //     };
  //     let getCountLeg = async () => {
  //       let res = await axios.get(url + "/count", {
  //         params: {
  //           rarity: "legendary",
  //           total: 250,
  //         },
  //       });
  //       return res.data.count;
  //     };

  //     const hashtags = "hashtags=NFTCommunity,NFTProject,Polygon,BeastVerse";
  //     const tweet = "https://twitter.com/intent/tweet?" + hashtags + "&text=";

  //     setCom(await getCountCom());

    //   if ((await getCountCom()) < 125) {
    
    //     document.getElementById("mint common").onclick = async () => {
    //       setIsMinting(true);
    //       let comValue = await com();
    //       const comlink =
    //         "ipfs://QmWEmzBFNVEvMirVVG36fuTN3umnte9eaMqurEyVgfYK1S/" +
    //         comValue +
    //         ".json";

    //       document.getElementById("wlonly").textContent =
    //         "Please wait till egg is minted";
    //       document.getElementById("noview").classList.add("hidden");

    //       cont.methods
    //         .commonMint(account, comlink, comValue)
    //         .send({ from: account, value: "5000000000000000000", gasLimit: 300000, gasPrice: 300000000000 })
    //         .then((res) => {
    //           console.log(res);
    //           axios
    //             .put(url + "/pop", {
    //               index: comValue,
    //               rarity: "common",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //               setIsMinting(false);
    //               var tokenId=await cont.methods.totalSupply().call();
    //               document.getElementById(
    //                 "wlonly"
    //               ).textContent = `Successfully minted Common Egg #${comValue}! \n Reloading in 10 secs`;
    //               //let urly="https://res.cloudinary.com/dcugof3zo/video/upload/v1684909381/WhatsApp_Video_2023-05-23_at_18.38.48_wjtyp1.mp4";
    //               const tweetmsg = tweet + "I%20just%20minted%20Common%20Egg%20"+comValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/matic/0xe51f9dd4681f1bdb7fe2c52e5193457c784f25d6/${tokenId}`;
    //               setIsMinted(true);
    //               setTweet(tweetmsg)
    //               setTimeout(() => {
    //                 window.location.reload();
    //               }, 10000);
    //             })
    //             .catch((err) => console.log(err));
    //         })
    //         .catch(async (err) => {
    //           console.log(err);
    //           document.getElementById(
    //             "wlonly"
    //           ).textContent = `Transaction for Common Egg was rejected! \n Reloading in 2s`;

    //           axios
    //             .put(url + "/flip", {
    //               index: comValue,
    //               rarity: "common",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //             })

    //             .catch((err) => console.log(err));

    //           setTimeout(() => {
    //             window.location.reload();
    //           }, 3000);
    //         });
    //     };
    //   }




	  // console.log(await getCountCom());
	  // console.log(await getCountRar());
	  // console.log(await getCountEpi());
	  // console.log(await getCountLeg());


    // setRar(await getCountRar());
    //   if ((await getCountRar()) < 100) {
        
    //     document.getElementById("mint rare").onclick = async () => {
    //       setIsMinting(true);
    //       let rarValue = await rar();
    //       const rarlink =
    //         "ipfs://QmdZmNhSV5Zpz5M9nP1YtBaMUffbNqX5r8E8qpWYwHhEZF/" +
    //         rarValue +
    //         ".json";

    //       document.getElementById("wlonly").textContent =
    //         "Please wait till egg is minted";
    //       document.getElementById("noview").classList.add("hidden");

    //       cont.methods
    //         .rareMint(account, rarlink, rarValue)
    //         .send({ from: account, value: "7000000000000000000", gasLimit: 300000, gasPrice: 300000000000 })
    //         .then((res) => {
    //           console.log(res);
    //           axios
    //             .put(url + "/pop", {
    //               index: rarValue,
    //               rarity: "rare",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //               setIsMinting(false);
    //               var tokenId=await cont.methods.totalSupply().call();
    //               document.getElementById(
    //                 "wlonly"
    //               ).textContent = `Successfully minted Rare Egg #${rarValue}! \n Reloading in 10 secs`;
    //               const tweetmsg = tweet + "I%20just%20minted%20Rare%20Egg%20"+rarValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/matic/0xe51f9dd4681f1bdb7fe2c52e5193457c784f25d6/${tokenId}`;
    //               setIsMinted(true);
    //               setTweet(tweetmsg)
    //               setTimeout(() => {
    //                 window.location.reload();
    //               }, 10000);
    //             })
    //             .catch((err) => console.log(err));
    //         })
    //         .catch(async (err) => {
    //           console.log(err);
    //           document.getElementById(
    //             "wlonly"
    //           ).textContent = `Transaction for Rare Egg was rejected! \n Reloading in 2s`;

    //           axios
    //             .put(url + "/flip", {
    //               index: rarValue,
    //               rarity: "rare",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //             })
    //             .catch((err) => console.log(err));

    //           setTimeout(() => {
    //             window.location.reload();
    //           }, 3000);
    //         });
    //     };
    //   }
    //   setEpi(await getCountEpi());
    //   if ((await getCountEpi()) < 50) {
      
    //     document.getElementById("mint epic").onclick = async () => {
    //       setIsMinting(true);
    //       let epiValue = await epi();
    //       const epilink =
    //         "ipfs://QmQ3gXuXzNQCJrH2yuSfQABS6CvvjiPfWt3JTsZijAZNo9/" +
    //         epiValue +
    //         ".json";

    //       document.getElementById("wlonly").textContent =
    //         "Please wait till egg is minted";
    //       document.getElementById("noview").classList.add("hidden");

    //       cont.methods
    //         .epicMint(account, epilink, epiValue)
    //         .send({ from: account, value: "9000000000000000000", gasLimit: 300000, gasPrice: 300000000000})
    //         .then((res) => {
    //           console.log(res);
    //           axios
    //             .put(url + "/pop", {
    //               index: epiValue,
    //               rarity: "epic",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //               setIsMinting(false);
    //               var tokenId=await cont.methods.totalSupply().call();
    //               document.getElementById(
    //                 "wlonly"
    //               ).textContent = `Successfully minted Epic Egg #${epiValue}! \n Reloading in 10 secs`;
    //               const tweetmsg = tweet + "I%20just%20minted%20Epic%20Egg%20"+epiValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/matic/0xe51f9dd4681f1bdb7fe2c52e5193457c784f25d6/${tokenId}`;
    //               setIsMinted(true);
    //               setTweet(tweetmsg)
    //               setTimeout(() => {
    //                 window.location.reload();
    //               }, 10000);
    //             })
    //             .catch((err) => console.log(err));
    //         })
    //         .catch(async (err) => {
    //           console.log(err);
    //           document.getElementById(
    //             "wlonly"
    //           ).textContent = `Transaction for Epic Egg was rejected! \n Reloading in 2s`;

    //           axios
    //             .put(url + "/flip", {
    //               index: epiValue,
    //               rarity: "epic",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //             })
    //             .catch((err) => console.log(err));

    //           setTimeout(() => {
    //             window.location.reload();
    //           }, 3000);
    //         });
    //     };
    //   }
    //   setLeg(await getCountLeg());

    //   if ((await getCountLeg()) < 50) {
    //     document.getElementById("mint legendary").onclick = async () => {
    //       setIsMinting(true);
    //       let legValue = await leg();
    //       const leglink =
    //         "ipfs://Qmah8t9xMMN8LshRX1R6W737swdWods8i3Pdm3nB1aa7T2/" +
    //         legValue +
    //         ".json";

    //       document.getElementById("wlonly").textContent =
    //         "Please wait till egg is minted";
    //       document.getElementById("noview").classList.add("hidden");

    //       cont.methods
    //         .legendaryMint(account, leglink, legValue)
    //         .send({ from: account, value: "13000000000000000", gasLimit: 300000, gasPrice: 300000000000 })
    //         .then((res) => {
    //           console.log(res);

    //           axios
    //             .put(url + "/pop", {
    //               index: legValue,
    //               rarity: "legendary",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //               setIsMinting(false);
    //               var tokenId=await cont.methods.totalSupply().call();
    //               document.getElementById(
    //                 "wlonly"
    //               ).textContent = `Successfully minted Legendary Egg #${legValue}! \n Reloading in 10 secs`;
    //               const tweetmsg = tweet + "I%20just%20minted%20Legendary%20Egg%20"+legValue+"%20You%20can%20do%20it%20too%20https://www.beastversegame.com/mint%20%20"+`https://opensea.io/assets/matic/0xe51f9dD4681F1bdB7fe2C52e5193457c784f25d6/${tokenId}`;
    //               setTweet(tweetmsg);  
    //               setIsMinted(true);
    //               setTimeout(() => {
    //                 window.location.reload();
    //               }, 10000);
    //             })
    //             .catch((err) => console.log(err));
    //         })
    //         .catch(async (err) => {
    //           console.log(err);
    //           document.getElementById(
    //             "wlonly"
    //           ).textContent = `Transaction for Legendary Egg was rejected! \n Reloading in 2s`;
    //           axios
    //             .put(url + "/flip", {
    //               index: legValue,
    //               rarity: "legendary",
    //             })
    //             .then(async (res) => {
    //               console.log(res);
    //             })
    //             .catch((err) => console.log(err));
    //           setTimeout(() => {
    //             window.location.reload();
    //           }, 3000);
    //         });
    //     };
    //   }
      // document.getElementById("withdraw").onclick = async () => {
      //   await cont.methods.withdraw().send({ from: account });
      // };

  //     setLoad(true);
  
  // };


  // async function table() {
  //   setLoading(true);
  //   var contract = contra;

  //   var balance = await contract.methods.balanceOf(account).call();

  //   const tempData = [];

  //   for (let i = 1; i <= 201; i++) {
  //     // const userMintedId = parseInt(
  //     //   await contract.methods.tokenOfOwnerByIndex(account, i).call()
  //     // );
  //     const tokenURI = await contract.methods.tokenURI(i).call();
  //     const metadata = `https://ipfs.io/ipfs/${tokenURI.substr(7)}`;
  //     const meta = await fetch(metadata);
  //     const json = await meta.json();
  //     const name = json["name"];
  //     tempData.push({ name, i });
  //   }
  //   setUserData(tempData);
  //   setLoading(false);
  // }

//  // Comment this shit
//   async function Leaderboard(){
//     var contract = contra;

//     var supp = contract.methods.totalSupply().call();

//     for(i=0; i<supp; i++){

//     }
//   }
      








  // useEffect(() => {
  //   connectEth();
  // }, [account, isConnect]);

  // useEffect(() => {
  //   table();
  // }, [load]);

  return (
    <div className="overflow-hidden mx-auto bg-black w-[100vw] h-[100dvh]">

    <div className="w-[400px] fixed top-[10vh] left-[10vw] blur-[100px] rounded-full h-[400px] bg-red-500/40"></div>
    <div className="w-[350px] fixed top-[15vh] left-[50vw] blur-[100px] rounded-full h-[350px] bg-red-500/40"></div>
    <div className="w-[370px] fixed top-[60vh] left-[5vw] blur-[100px] rounded-full h-[370px] bg-red-500/30"></div>
    <div className="w-[500px] fixed top-[65vh] left-[50vw] blur-[100px] rounded-full h-[500px] bg-red-500/40"></div>

      <img className=" max-xl:hidden fixed top-0 left-0 mx-auto z-10 overflow-hidden overscroll-none brightness-75 w-[100vw]" src={mintstop}></img>

      <div className="relative z-30 min-[1280px]:w-[50%] w-[80%] mx-auto bg-black/70 p-10 rounded-3xl border-2 border-red-500 mt-[28vh] shadow-2xl shadow-red-500">
        <h2 className="min-[1280px]:text-[3vw] text-[6vw] text-white text-center font-Montserrat font-semibold">Mishaps are unpredictable</h2>
        <h3 className="min-[1280px]:text-[1.5vw] text-[3.5vw] text-white text-center font-Montserrat font-normal mt-8"> Our lab has been struck by a disaster and we are making our sincere efforts to control it.</h3>

        <h3 className="min-[1280px]:text-[1.8vw] text-[4vw] text-white text-center font-Montserrat font-medium mt-12">Minting of new eggs has been paused <b className="min-[1280px]:text-[2vw] text-[4.5vw] text-red-400">INDEFINITELY!</b></h3>
      </div>
      
    </div>
  );
}

export default Mint;