import { getMintContract } from '@src/lib/contract';

export const getBalance = async (currentPoint) => {
  const mintContract = await getMintContract();
  const burningMatic = await mintContract.getBurningAmount(currentPoint);

  return burningMatic.toNumber();
};
