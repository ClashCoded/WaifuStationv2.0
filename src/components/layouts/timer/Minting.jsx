import React, { useEffect, useState, useRef } from "react";
import getMerkleTree from "../../../utils/merkleTreeHelper";
import Web3 from "web3";
import { usePresaleContract } from "../../../contracts/useContract";
import { useWeb3React } from "@web3-react/core";
import InputButton from "../mint/InputButton";
import styled from "styled-components";
import keccak256 from "keccak256";

const MintingComponent = styled.div`
  width: 100%;
`;

const MintingSpan = styled.span`
  color: var(--primary-color2)
`

const Minting = () => {
  const [mintAmount, setMintAmout] = useState(1);
  const contract = usePresaleContract();
  const { account, chainId } = useWeb3React();
  const [calculatedFees, setCalculatedFees] = useState(0);
  const [mintCap, setMintCap] = useState(0);

  useEffect(() => {
    const calculateFee = async() => {
      const mintFee = await contract.methods.mintFee().call();
      setCalculatedFees(mintFee*mintAmount/10**18)
    }
    calculateFee()
  }, [contract, mintAmount])

  useEffect(() => {
    const getMintCap = async() => {
      const mC = await contract.methods.walletCap().call();
      setMintCap(mC)
    }
    getMintCap()
  }, [contract])


  const SUPPORTED_CHAINS = {
    1: "Ethereum",
    3: "Ropsten",
    4: "Rinkeby",
    137: "Polygon Mainnet",
    80001: "Polygon Testnet",
  };
  

  const mintNft = async () => {
    if (!contract) {
      console.error("chain not supported");
      return;
    }
    const mintFee = await contract.methods.mintFee().call();
    const MerkleTree = getMerkleTree();
    const proof = MerkleTree.getHexProof(keccak256(account));


    if (mintAmount <= 0 || mintAmount > mintCap) {
      alert(`Please enter mint amount between 1-${mintCap}`);
      return;
    }

    await contract.methods
      .mint(mintAmount, proof)
      .send({
        from: Web3.utils.toChecksumAddress(account),
        value: mintAmount * mintFee,
      });
  };

  return (
    <div>
        <MintingComponent>
          <InputButton count={mintAmount} setCount={setMintAmout} />
          <div className="flat-bt-slider timer-container">
            {/* <Input2
              value={"Minting on " + SUPPORTED_CHAINS[chainId]}
              disabled
            /> */}
            <button
              onClick={() => mintNft()}
              className="minting-button sc-button header-slider style style-1 rocket fl-button pri-1"
              style={{border: "2px solid #FD9DCB"}}
            >
              <MintingSpan>Mint {calculatedFees} Ξ</MintingSpan>
            </button>
          </div>
        </MintingComponent>
    </div>
  );
};

export default Minting;
