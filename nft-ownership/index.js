const { Alchemy, Network } = require("alchemy-sdk");

const config = {
  apiKey: "CA4eh0FjTxMenSW3QxTpJ7D-vWMSHVjq",
  network: Network.MATIC_MAINNET,
};

const alchemy = new Alchemy(config);

const main = async () => {
  var common = 0;
  var rare = 0;
  var epic = 0;
  const legendary = 0;

  // Get all NFTs
  const nfts = await alchemy.nft.getNftsForOwner("0xF167e19fEf76b587767955900dAF07ed4C926db3");
  const one = nfts["ownedNfts"];

  for(let i=0; i<99; i++){
    var NFT = one[i];
    
    const meta = NFT["rawMetadata"];
    const trait = meta.traits == undefined ? "mk" : meta.traits;

    if(trait.length == 0){
        continue;
    }

    

    const getTrait = trait[0];
    // console.log(getTrait);


    const rarity = getTrait["value"] === undefined? null: getTrait["value"];
    const type = getTrait["trait_type"] === undefined? null: getTrait["trait_type"];

    if(rarity == undefined || type == undefined){
      continue;
    }
    // console.log(type,": ", rarity);

    if(type == "Background"){
      // console.log(type,": ", rarity);
      if(rarity == "Squared Lilac"){
        common++;
      }

      else if(rarity == "Green"){
        rare++;
      }

      else if(rarity == "Electric Spread"){
        epic++;
      }

      else{
        legendary++;
      }

    }

    
  }

  console.log("User has", common, " common, " ,rare, " rare, ", epic, " epic, ", legendary, " legendary NFTs." );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();