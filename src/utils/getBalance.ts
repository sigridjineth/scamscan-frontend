import { getMintContract } from '@src/lib/contract';

export const getBalance = async (currentPoint: number) => {
  const mintContract = await getMintContract();
  const burningMatic = await mintContract.getBurningAmount(currentPoint);

  return burningMatic.toNumber();
};
