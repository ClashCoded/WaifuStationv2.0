import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
 
const MintBar = () => {

    return (
        <ProgressBar
        percent={50}
        // percent={prices.remainingNft / 10000 * 100}
        filledBackground="rgba(255, 204, 255, 0.6)"
        height="30px"
        // text={"hello"} 
        
        />
    );
  }

   
export default MintBar
