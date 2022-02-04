import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import TransactionIdInfo from '../../components/TransactionIdInfo';

const TransactionId = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '24px 50px 50px 50px' }}>
        <SearchBar />
        <div className={styles.back}>
          <Link href='/transactions'>
            <a>
              <Image src='/back.png' alt='Back Icon' width={32} height={32} />
              <span>Go Back</span>
            </a>
          </Link>
        </div>
        <TransactionIdInfo />
      </div>
    </div>
  );
};

export default TransactionId;
