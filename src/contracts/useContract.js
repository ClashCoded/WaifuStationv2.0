import presaleabi from "../abi/presaleContractAbi.json";
import nftabi from "../abi/nftContractAbi.json";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

const presaleadresses = {
  3: "0xB972BA5722B1147733bed1738F61D6B4F484798C", //presale
};

const nftadresses = {
  3: "0xa3a270e508DEd34158b4492539D23B987FD1d60b", //nft
};

export const usePresaleContract = () => {
  const { library, chainId } = useWeb3React();
  if (!presaleadresses[chainId]) {
    return null;
  }

  const web3 = new Web3(library);
  const contract = new web3.eth.Contract(presaleabi, presaleadresses[chainId]);

  return contract;
};

export const useNftContract = () => {
  const { library, chainId } = useWeb3React();
  if (!nftadresses[chainId]) {
    return null;
  }

  const web3 = new Web3(library);
  const contract = new web3.eth.Contract(nftabi, nftadresses[chainId]);

  return contract;
};
