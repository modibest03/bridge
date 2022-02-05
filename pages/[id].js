import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import TransactionTable from '../components/TransactionTable';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.scss';
import { useGetTransactionByAccount } from '../utils/api';
import Skeleton from 'react-loading-skeleton';

const TransactionId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { transactionByAccount, isLoadingTransactionByAccount } =
    useGetTransactionByAccount(id, page, limit);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '24px 50px 50px 50px' }}>
        {isLoadingTransactionByAccount ? (
          <Skeleton
            style={{ height: '3rem', marginTop: '4rem' }}
            baseColor='#000e48'
            highlightColor='#02061d'
            duration={1}
          />
        ) : (
          <SearchBar />
        )}

        {isLoadingTransactionByAccount ? (
          <Skeleton
            style={{ height: '3rem', marginTop: '4rem' }}
            baseColor='#000e48'
            highlightColor='#02061d'
            duration={1}
          />
        ) : (
          <>
            <div className={styles.showing}>showing transactions for</div>
            <div className={styles.text_id}>
              <div>{id}</div>
              <div>
                <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
              </div>
            </div>
          </>
        )}

        <TransactionTable
          data={transactionByAccount?.transactions?.data}
          lastPage={transactionByAccount?.transactions?.last_page}
          isLoading={isLoadingTransactionByAccount}
          page={page}
          limit={limit}
          setPage={setPage}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
};

export default TransactionId;
