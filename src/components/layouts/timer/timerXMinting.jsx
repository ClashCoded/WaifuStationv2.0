import React, { useEffect, useState, useRef } from "react";
import Web3 from "web3";
import useLayerZero from "../../../contracts/useLayerZero";
import { useWeb3React } from "@web3-react/core";
import InputButton from "../mint/InputButton";
import styled from "styled-components";

const Input2 = styled.input`
  background: rgba(0, 0, 0, 0);
  padding: 15px;
  font-size: 15px;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color10);
  border-radius: 15px;
  color: #fcfcfc;
  text-align: center;
  margin-right: 20px;
`;

const MintingComponent = styled.div`
  margin-top: 8rem;
  width: 100%;
`;


const TimerxMint = () => {
  const [mintAmount, setMintAmout] = useState(0);
  const contract = useLayerZero();
  const { account, chainId } = useWeb3React();
  const [showTimer, setShowTimer] = useState(true);
  const [showMint, setShowMint] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Apr 18, 2022 12:00:00").getTime();
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
  useEffect( () => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  
  const MAX_MINT = 3;
  const SUPPORTED_CHAINS = {
    1: "Ethereum",
    3: "Ropsten",
    4: "Rinkeby",
    137: "Polygon Mainnet",
    80001: "Polygon Testnet",
  };

  const mintNft = async () => {
    if (!SUPPORTED_CHAINS[chainId]) {
      alert("Selected chain not supported!");
      return;
    }
    if (mintAmount <= 0 || mintAmount > MAX_MINT) {
      alert(`Please enter mint amount between 1-${MAX_MINT}`);
      return;
    }

    await contract.methods
      .mint(mintAmount)
      .send({ from: Web3.utils.toChecksumAddress(account) });
  };

  return (
    <div>
      {!showTimer ? (
        <MintingComponent>
          <InputButton count={mintAmount} setCount={setMintAmout} />
          <div className="flat-bt-slider timer-container">
            <Input2
              value={"Minting on " + SUPPORTED_CHAINS[chainId]}
              disabled
            />
            <button
              onClick={() => mintNft()}
              className="sc-button header-slider style style-1 rocket fl-button pri-1"
              style={{ borderRadius: "15px" }}
            >
              <span>Mint</span>
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
