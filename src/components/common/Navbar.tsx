/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '@src/assets/logo.svg';
import Modal from '@src/components/common/Modal';
import { checkWalletConnected } from '@src/utils/checkWalletConnected';
import { connectMetamask } from '@src/utils/connectWallet';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Navbar() {
  const router = useRouter();
  const [ownerAddress, setOwnerAddress] = useState<string | undefined | null>('');

  useEffect(() => {
    getAccounts();
  }, [ownerAddress]);

  const handleClick = () => {
    router.push('/');
  };

  const ownerAddressShortFront = ownerAddress?.substring(0, 5);
  const ownerAddressShortBack = ownerAddress?.substring(
    ownerAddress.length - 5,
    ownerAddress.length,
  );

  const getAccounts = async () => {
    const metamaskAccounts = await checkWalletConnected();

    setOwnerAddress(metamaskAccounts);
  };

  const handleWalletClick = async () => {
    const metamaskAccounts = await connectMetamask();

    setOwnerAddress(metamaskAccounts);
  };

  const menus = [
    { label: 'Mint', path: '/mint' },
    { label: 'Check', path: '/check' },
    { label: 'MyPage', path: '/mypage' },
  ];
  const handleRouting = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const address = typeof window !== undefined && localStorage.getItem('ownerAddress');

    if (!address) {
      alert('You need to connect metamask!');
    }

    switch (e.currentTarget.id) {
      case 'Mint':
        router.push({
          pathname: '/mint',
        });
        break;
      case 'Check':
        router.push({
          pathname: '/check',
        });
        break;
      case 'MyPage':
        router.push({
          pathname: '/check/confirm',
          query: { checkAddress: address },
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar p-12 fixed z-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={() => handleClick()}>
          <Logo />
        </a>
      </div>
      <ul className="menu menu-horizontal p-0 text-white text-2xl mr-2">
        {menus.map((menu, key) => (
          <li className="mx-1" key={`menu.label${key}`}>
            <a onClick={handleRouting} id={menu.label}>
              {menu.label}
            </a>
          </li>
        ))}
      </ul>

      {ownerAddress ? (
        <div className="btn font-black text-xl text-white ">
          {ownerAddressShortFront}...{ownerAddressShortBack}
        </div>
      ) : (
        <Modal
          modalId="connectWallet"
          _onClick={handleWalletClick}
          btnText="Connect Wallet"
          modalTitle="Connect Wallet"
          modalContent="Please connect your wallet to continue"
          modalBtn="MetaMask"
        />
      )}
    </div>
  );
}

export default Navbar;
