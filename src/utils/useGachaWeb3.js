import { useState, useEffect } from "react";

const useGachaWeb3 = () => {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [chainId, setChainId] = useState(null);

    useEffect(async () => {
        if (!window.ethereum) {
            console.error("Metamask not installed!");
            return;
        }

        await window.ethereum
            .request({ method: "eth_accounts" })
            .then(async (accounts) => {
                setAccount(accounts[0]);
                setProvider(window.ethereum);
                const cid = await window.ethereum.request({
                    method: "eth_chainId",
                });
                setChainId(cid);
            })
            .catch((err) => {
                console.error(err);
            });

        window.ethereum.on("chainChanged", (newChainId) => {
            setChainId(newChainId);
        });
    });

    return { account, provider, chainId };
};

export default useGachaWeb3;
