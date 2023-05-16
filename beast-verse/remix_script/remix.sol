// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.8.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.8.2/utils/Counters.sol";

contract BeastVerse is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 public mintRate = 0.01 ether;
    uint256 public MAX_SUPPLY = 3000;


    constructor() ERC721("Beast Verse", "BV") {}

    function commonMint(address to, string memory uri, uint256) public payable {
        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function rareMint(address to, string memory uri, uint256) public payable {

        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function epicMint(address to, string memory uri, uint256) public payable {
        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function legendaryMint(address to, string memory uri, uint256) public payable {

        _tokenIdCounter.increment();
        require(totalSupply() < MAX_SUPPLY, "Cannot mint more!");
        require(msg.value >= mintRate, "Not enough Ether.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
  
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }


    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function withdraw() public onlyOwner{
        require(address(this).balance > 0, "Balance is 0");

        address[] memory wallets = new address[](18);
        wallets[0] = address(0x1ce256752fBa067675F09291d12A1f069f34f5e8); //Me
        wallets[1] = address(0xa92B24AC60A6B381E0eC2DD17d2a3339Cda24D84); //Sayak
        wallets[2] = address(0xd762eb9a13821a93e5c02baefEC29fC1E785FaF2); //Anusmita
        wallets[3] = address(0x6f165c4cFAA801dF7959E427094dcA238E5ee3bd); //Sabuj
        wallets[4] = address(0x50912A8ab9362D17D264DbE62989181f0f01c641); //Rahul
        wallets[5] = address(0xbC6b6652F244Ff6B1C584503F558d3a152EB5a0E); //Aritra
        wallets[6] = address(0x632C0480be31fD2234703553020815366A8116F1); //Soham
        wallets[7] = address(0xedE39DA6900d8040a4ec6a574F59d89815894482); //Aiindrila
        wallets[8] = address(0x82ceFB5b4D46B9079e45e7C6B6188EB2062c12F8); //Nilanjan
        wallets[9] = address(0xF275A2715C8FB5F67649F6CC5C8AFf2419B8d46f); //NATE
        wallets[10] = address(0x3f959a5256F931EdF843077981FBbB26a91D28Fd); //AG
        wallets[11] = address(0x697cD3457ec0a57335111068D31f008E932C6010); //Macho
        wallets[12] = address(0xaaD1517820C1581B555EBF6A40E919884df2e79d); //Jofreelon
        wallets[13] = address(0x0a8e0A79B663e5334599d6Cdc76aD5e379228CF1); //SIRTEE
        wallets[14] = address(0x09878440535ed004cc20732c19821befb7c04cDb); //d_cash
        wallets[15] = address(0x95d0f0FB194718A6D82a3D7F85f73DCD9E716302); //Bobo
        wallets[16] = address(0xE633567d20749bF0025a7C748c93542A413Eeb3A); //Yugi
        wallets[17] = address(0x4012dBd303447EC2EF495f18c1f95CCf01a33594); //cyberbully

        uint8[18] memory percentages = [118, 73, 74, 73, 73, 73, 73, 73, 73, 33, 33, 33, 33, 33, 33, 33, 33, 33]; // Percentages for each wallet

    uint256 totalPercentage = 0;
    for (uint256 i = 0; i < percentages.length; i++) {
        totalPercentage += percentages[i];
    }

    uint256 totalBalance = address(this).balance;

    for (uint256 i = 0; i < wallets.length; i++) {
        uint256 paymentAmount = (totalBalance * percentages[i]) / totalPercentage;
        payable(wallets[i]).transfer(paymentAmount);
    }
    }
}