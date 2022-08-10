export const checkWalletConnected = async () => {
  try {
    const { ethereum } = window;
    const accounts = (await ethereum.request({
      method: 'eth_accounts',
    })) as Array<string>;
    localStorage.setItem('ownerAddress', accounts[0]);
    return accounts[0];
  } catch (error) {
    alert('Error');
    console.log(error);
  }
};
