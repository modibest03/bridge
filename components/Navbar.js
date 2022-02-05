import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <div className={styles.left} onClick={() => router.push('/')}>
        <Image src='/bridge.png' alt='logo' width={171.61} height={40} />
      </div>
      <div className={styles.right}>Use Bridge Mainnet</div>
    </nav>
  );
};

export default Navbar;
