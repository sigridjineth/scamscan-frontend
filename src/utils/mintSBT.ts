import { getMintContract } from '@src/lib/contract';
import { ethers } from 'ethers';

// let AIRDROP_SNAPSHOT_TIMESTAMPS;
// let AIRDROP_TARGET_ADDRESSES;
// const TOTAL_AIRDROP_VOLUME_PER_ROUND = 3000;

// let owner;
// let address1;
// let address2;
// let ReputationTokenFactory;
// let ReputationToken;

// async function deployTokenFixture() {
//   ReputationTokenFactory = await ethers.getContractFactory('ReputationToken');

//   [owner, address1, address2] = await ethers.getSigners();

//   const reputationToken = await ReputationTokenFactory.deploy('ScamScan', 'SCAM', '1.0');

//   await reputationToken.deployed();

//   return { reputationToken, owner, address1, address2 };
// }

interface mintSBTParams {
  from: string | null;
  to: string | null;
  calldata?: string | null;
  signature?: string | null;
  score: number | null;
  transactionId: string | null;
  reason: string | null;
  matic: number | null;
}
export const mintSBT = async ({
  from,
  to,
  calldata = '',
  signature = '',
  score,
  transactionId,
  reason,
  matic,
}: mintSBTParams) => {
  const mintContract = await getMintContract();
  // const { reputationToken, owner, address1, address2 } = await deployTokenFixture();
  // const SALT = '0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558';
  // //
  // // const structHash = ethers.utils.defaultAbiCoder.encode([AGREEMENT_HASH], [EIP712_DOMAIN_TYPEHASH], [NAME], [AMOUNT], [HARDHAT_LOCAL_CHAIN_ID], [SBT_TOKEN_ADDRESS], [SALT]);
  // // const keccakedStructHash = ethers.utils.keccak256(structHash);
  // //
  // // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", keccakedStructHash)

  // const domain = [
  //   { name: 'name', type: 'string' },
  //   { name: 'version', type: 'string' },
  //   { name: 'chainId', type: 'uint256' },
  //   { name: 'verifyingContract', type: 'address' },
  //   { name: 'salt', type: 'bytes32' },
  // ];

  // const AGREEMENT = [
  //   { name: 'active', type: 'address' },
  //   { name: 'passive', type: 'address' },
  //   { name: 'uri', type: 'string' },
  // ];

  // const domainData = {
  //   chainId: 31337,
  //   name: 'ScamScan',
  //   version: '1.0',
  //   verifyingContract: reputationToken.address,
  //   salt: SALT,
  // };

  // const message = {
  //   active: owner.address,
  //   passive: address1.address,
  //   uri: 'https://www.scamscan.io',
  // };

  // const data = JSON.stringify({
  //   types: {
  //     EIP712Domain: domain,
  //     AGREEMENT,
  //   },
  //   domain: domainData,
  //   primaryType: 'AGREEMENT',
  //   message,
  // });

  // const provider = new ethers.providers.JsonRpcProvider();
  // const sendAsyncReceipt = await provider.send('eth_signTypedData_v4', [owner.address, data]);

  // console.log(sendAsyncReceipt);

  // //signature
  // const receipt = await reputationToken.give(
  //   owner.address,
  //   address1.address,
  //   'https://www.scamscan.io',
  //   sendAsyncReceipt,
  //   5,
  //   5,
  //   'a',
  // );
  const tempCallData = 'scamscan';
  const utf8Encode = new TextEncoder();
  const byteArr = utf8Encode.encode('scamscan');
  const result = mintContract.give(from, to, tempCallData, byteArr, score, transactionId, reason, {
    value: ethers.utils.parseUnits('0.01', matic ? matic : 10),
  });

  return result;
};
