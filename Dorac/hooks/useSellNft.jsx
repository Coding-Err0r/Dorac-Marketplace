import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useMoralisQuery } from 'react-moralis';
import Moralis from 'moralis';

const useSellNft = () => {
  const [ownerOf, setOwnerOf] = useState();
  const [sold, setSold] = useState(false);
  const { fetch } = useMoralisQuery(
    'AllToken',
    (query) => query,
    [],
    {
      autoFetch: false,
    }
  );

  const handleSell = async (tokenID, price, tokenAddress) => {
    const marketABI = require('../utils/NFT_MARKET_ABI.json');
    const dogABI = require('../utils/DOG_NFT_ABI.json');

    const dogNFTAddress = String(
      process.env.NEXT_PUBLIC_DEPLOYED_DOGNFT_ADDRESS
    );

    const marketAddress = String(
      process.env.NEXT_PUBLIC_DEPLOYED_MERKETPLACE_ADDRESS
    );
    const provider = new ethers.providers.Web3Provider(
      web3.currentProvider
    );
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const marketWeb3Contract = new ethers.Contract(
      marketAddress,
      marketABI,
      signer
    );
    const dogNftContract = new ethers.Contract(
      dogNFTAddress,
      dogABI,
      signer
    );
    const marketItemsList = await marketWeb3Contract.marketItemsList(
      tokenID
    );
    const value = ethers.utils.parseEther(String(price));
    await marketWeb3Contract.addMarketItem(
      tokenID,
      marketItemsList.NFTaddress,
      value
    );
    console.log('Added Market Item');
  };
  return [handleSell];
};

export default useSellNft;
