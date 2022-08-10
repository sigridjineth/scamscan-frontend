import { Contract, providers, Wallet } from 'ethers';

import { ContractAbi } from '../abi';

interface MintContractParams {
  ownerAddress: string;
}

export const getMintContract = ({ ownerAddress }: MintContractParams) => {
  const provider = new providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
  const signer = new Wallet(ownerAddress, provider);
  const mintContract = new Contract(process.env.PRIVATE_KEY, ContractAbi, signer);

  return mintContract;
};
