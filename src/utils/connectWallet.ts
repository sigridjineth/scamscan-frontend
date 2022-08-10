export const connectMetamask = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      alert('Get MetaMask!');
      return;
    }
    const accounts = (await ethereum.request({ method: 'eth_requestAccounts' })) as Array<string>;
    localStorage.setItem('ownerAddress', accounts[0]);
    console.log('Connected', accounts[0]);

    return accounts[0];
  } catch (error) {
    alert('Error');
    console.log(error);
  }
};
