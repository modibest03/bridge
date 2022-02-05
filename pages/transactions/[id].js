import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';
import TransactionIdInfo from '../../components/TransactionIdInfo';
import { useRouter } from 'next/router';
import { useGetTransactionById } from '../../utils/api';
import Skeleton from 'react-loading-skeleton';

const TransactionId = () => {
  const router = useRouter();
  const { id } = router.query;
  const { transactionById, isLoadingTransactionById } =
    useGetTransactionById(id);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '24px 50px 50px 50px' }}>
        {transactionById && <SearchBar />}
        <div className={styles.back} onClick={() => router.back()}>
          <div>
            <Image src='/back.png' alt='Back Icon' width={32} height={32} />
            <span>Go Back</span>
          </div>
        </div>
        {isLoadingTransactionById && (
          <Skeleton
            style={{ height: '50rem', marginTop: '4rem', width: '100%' }}
            baseColor='#000e48'
            highlightColor='#02061d'
            duration={1}
          />
        )}

        {transactionById && (
          <TransactionIdInfo data={transactionById?.transactions.data[0]} />
        )}
      </div>
    </div>
  );
};

export default TransactionId;
