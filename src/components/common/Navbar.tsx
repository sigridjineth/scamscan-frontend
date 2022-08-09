import { connectMetamask } from '@src/utils/connectWallet';
import React, { useEffect, useState } from 'react';
import Logo from '@src/assets/logo.svg';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();
  const [ownerAddress, setOwnerAddress] = useState<string | undefined | null>('');

  useEffect(() => {
    setOwnerAddress(localStorage.getItem('ownerAddress'));
  }, [ownerAddress]);

  const handleClick = () => {
    router.push('/');
  };

  const ownerAddressShort = ownerAddress?.substring(0, 5);
  const ownerAddressShort2 = ownerAddress?.substring(ownerAddress.length - 5, ownerAddress.length);

  const handleWalletClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'metamask':
        console.log(await connectMetamask());
        break;
      default:
        break;
    }
  };

  const menus = [
    { label: 'Mint', path: '/mint' },
    { label: 'Check', path: '/check' },
    { label: 'MyPage', path: '/mypage' },
  ];

  return (
    <div className="navbar p-12 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={() => handleClick()}>
          <Logo />
        </a>
      </div>
      <ul className="menu menu-horizontal p-0 text-white text-2xl mr-2">
        {menus.map((menu, key) => (
          <li className="mx-1" key={`menu.label${key}`}>
            <a href={`${menu.path}`}>{menu.label}</a>
          </li>
        ))}
      </ul>

      {ownerAddress ? (
        <div className="btn bg-transparent text-white text-xl font-black">
          {ownerAddressShort}...{ownerAddressShort2}
        </div>
      ) : (
        <div className="flex-none">
          <label
            htmlFor="my-modal-4 "
            className="btn modal-button bg-transparent text-white text-xl font-black"
          >
            Connect Wallet
          </label>

          <input type="checkbox" id="my-modal-4" className="modal-toggle" />

          <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
              <h3 className="font-bold text-lg text-center">Connect Wallet</h3>
              <p className="py-4 text-center">Choose wallet to connect to the blockchain.</p>
              <div className="grid gap-4">
                <button
                  className="btn btn-block"
                  onClick={handleWalletClick}
                  type="button"
                  id="metamask"
                >
                  Metamask Wallet
                </button>

                <button
                  className="btn btn-block "
                  onClick={handleWalletClick}
                  type="button"
                  id="keplr"
                >
                  Keplr Wallet
                </button>
              </div>
            </label>
          </label>

          {/* <TestEvmos ownerAddress={ownerAddress} /> */}
        </div>
      )}
    </div>
  );
}

export default Navbar;
