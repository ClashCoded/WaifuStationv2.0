import whitelistedWallets from "./whitelistedWallets.json";
import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";

// export const walletData = async (wallet) => {
//     const address = keccak256(wallet);
//     const tree = await GenerateTree();
//     return tree.getHexProof(address);
// };

const getMerkleTree = () => {
    const leafNodes = whitelistedWallets.map((wallet) => keccak256(wallet.metamask));
    return new MerkleTree(leafNodes, keccak256, {
        sortPairs: true,
    });
};

export default getMerkleTree;