/*
1. 해당 Tx의 to, from이 작성자의 address 와 신고하고자 하는 사람의 address와 일치한지
2. 해당 Tx가 중복된 애가 없는지 
*/

interface getTxReceiptParams {
  transactionId: string;
}
export const getTxReceipt = async ({ transactionId }: getTxReceiptParams) => {};
