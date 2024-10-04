import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {

  const Token_ADDR = "0xA1Fac650589116A01A1eb056761ab019cC61e3AE";
    const MERKLE_ROOTHASH= "0xb90d566c79c944da6a663f686fe53871e99a6daac4b06f57e442b52165b529ae";

  const merkleAirdrop = m.contract("MerkleAirdrop", [Token_ADDR, MERKLE_ROOTHASH]);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;
