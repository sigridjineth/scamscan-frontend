import { REPUTATION_TOKEN_CONTRACT_ADDRESS } from '@src/constants/index';
import { ContractAbi } from '@src/lib/abi/index';
import { Contract, providers, Wallet } from 'ethers';

interface MintContractParams {
  ownerAddress: string;
}

export const getMintContract = ({ ownerAddress }: MintContractParams) => {
  const provider = new providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
  const signer = new Wallet(process.env.PRIVATE_KEY, provider);
  const mintContract = new Contract(ownerAddress, ContractAbi, signer);

  return mintContract;
};

export const getCheckContract = () => {
  const provider = new providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
  const checkContract = new Contract(REPUTATION_TOKEN_CONTRACT_ADDRESS, ContractAbi, provider);

  return checkContract;
};
