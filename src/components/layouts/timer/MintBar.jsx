import React, { useEffect, useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { usePresaleContract } from "../../../contracts/useContract";
 
const MintBar = () => {
  const contract = usePresaleContract();
  const [amountNfts, setAmountNfts] = useState(0);
  
  useEffect(() => {
    const amountNft= async() => {
      const remainingAmount = await contract.methods.remainingSupply().call();
      setAmountNfts(remainingAmount)
    }
    amountNft()
  }, [contract])

    return (
        <ProgressBar
        percent={amountNfts / 300 * 100}
        // percent={prices.remainingNft / 10000 * 100}
        filledBackground="rgba(249, 157, 204, 0.6)"
        height="30px"
        text={amountNfts} 
        />
    );
  }

   
export default MintBar
