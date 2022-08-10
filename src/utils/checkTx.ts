/*
1. 해당 Tx의 to, from이 작성자의 address 와 신고하고자 하는 사람의 address와 일치한지
2. 해당 Tx가 중복된 애가 없는지 
*/

import { providers } from 'ethers';

// from / to 추출

interface getTxReceiptParams {
  transactionId: string;
}

interface checkTxValidationParams extends getTxReceiptParams {
  targetAddress: string;
}

interface ReturnValue {
  transactionId: 'Failed' | 'Success';
  targetAddress: 'Failed' | 'Success';
}
export const getTxReceipt = async ({ transactionId }: getTxReceiptParams) => {
  const provider = new providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
  const txReceipt = await provider.waitForTransaction(transactionId);
  console.log('>>txReceipt', txReceipt);
  return txReceipt;
};

export const checkTxValidation = async ({
  transactionId,
  targetAddress,
}: checkTxValidationParams): Promise<ReturnValue> => {
  try {
    const txReceipt = await getTxReceipt({ transactionId });

    if (
      targetAddress !== txReceipt?.from.toLowerCase() &&
      targetAddress !== txReceipt?.to.toLowerCase()
    ) {
      return {
        targetAddress: 'Failed',
        transactionId: 'Success',
      };
    }

    // @TODO transactionId에 본인이 없으면 (본인 address는 로컬스토리지에서 가져옴) transactionId가 false

    // @TODO 만약 두가지 다 있다면 컨트랙트로 보내서 중복 체크

    return {
      targetAddress: 'Success',
      transactionId: 'Success',
    };
  } catch (e) {
    console.log('check transaction error', e);

    return {
      targetAddress: 'Failed',
      transactionId: 'Failed',
    };
  }
};
