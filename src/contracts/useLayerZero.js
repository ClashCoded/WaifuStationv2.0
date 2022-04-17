import abi from "../abi/layerZeroAbi.json";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

const adresses = {
  3: "0x33e62b62E18813Ae98b56FEa931862e2e780c8D7",
  4: "0x1a2ce152a69A98fe0C40efCCAf10721Fa15C1515",
  80001: "0xf1a94d48E0E9632F3F388Fc46a4A31587086681f",
};

const useLayerZero = () => {
  const { library, chainId } = useWeb3React();
  
  const web3 = new Web3(library);
  const contract = new web3.eth.Contract(abi, adresses[chainId])

  return contract
};

export default useLayerZero
