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

const TimerxMint = () => {
  const [mintAmount, setMintAmout] = useState(1);
  const contract = usePresaleContract();
  const { account, chainId } = useWeb3React();
  const [showTimer, setShowTimer] = useState(true);
  const [showMint, setShowMint] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const [calculatedFees, setCalculatedFees] = useState(0);
  const [mintCap, setMintCap] = useState(0);

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("May 20, 2022 10:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance <= 0) {
        // stop our timer
        // setShowTimer(false)
        // clearInterval(interval.current)
        // setShowMint(true)
        setShowTimer(false);
        clearInterval(interval.current);
        setShowMint(true);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

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
      {!showTimer ? (
        <MintingComponent>
          <InputButton count={mintAmount} setCount={setMintAmout} />
          <div className="flat-bt-slider timer-container">
            {/* <Input2
              value={"Minting on " + SUPPORTED_CHAINS[chainId]}
              disabled
            /> */}
            <button
              onClick={() => mintNft()}
              className="sc-button header-slider style style-1 rocket fl-button pri-1"
              style={{ borderRadius: "15px", border: "2px solid #FD9DCB"}}
            >
              <MintingSpan>Mint {calculatedFees} Ξ</MintingSpan>
            </button>
          </div>
        </MintingComponent>
      ) : (
        <div className="timer-div">
          <div className="time-box">
            <h2>Days</h2>
            <h2>{timerDays}</h2>
          </div>
          <div className="time-box">
            <h2>Hours</h2>
            <h2>{timerHours}</h2>
          </div>
          <div className="time-box">
            <h2>Minutes</h2>
            <h2>{timerMinutes}</h2>
          </div>
          <div className="time-box">
            <h2>Seconds</h2>
            <h2>{timerSeconds}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerxMint;
