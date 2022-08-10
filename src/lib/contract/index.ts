import { Contract, providers, Wallet } from 'ethers';

import { ContractAbi } from '../abi';

interface MintContractParams {
  ownerAddress: string;
}

export const getMintContract = async () => {
  const CONTRACT_ID = '0xeE0cfA2dCD39E24E0B402f98388D6194cd811390';
  // const provider = new providers.Web3Provider(window.ethereum, 'any');

  // await provider.send('eth_requestAccounts', []);
  // const signer = provider.getSigner();

  // await signer.connect(provider);

  // console.log('>>signer', signer);
  // const CONTRACT_ID = '0xeE0cfA2dCD39E24E0B402f98388D6194cd811390';
  const provider = new providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
  const signer = new Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider);
  const mintContract = new Contract(CONTRACT_ID, ContractAbi, signer);

  return mintContract;
};
