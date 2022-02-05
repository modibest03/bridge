import React from 'react';
import Image from 'next/image';
import styles from './transactionTable.module.scss';

import TransactionFetch from './TransactionFetch';
import Skeleton from 'react-loading-skeleton';

const TransactionTable = ({
  data,
  lastPage,
  isLoading,
  page,
  limit,
  setPage,
  setLimit,
}) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton
          style={{ height: '50rem', marginTop: '4rem', width: '100%' }}
          baseColor='#000e48'
          highlightColor='#02061d'
          duration={1}
        />
      ) : (
        <table className={styles.table} cellSpacing='0' cellPadding='0'>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>TxID</th>
              <th className={styles.th}>Asset</th>
              <th className={styles.th}>From</th>
              <th className={styles.th}>To</th>
              <th className={styles.th}>Age</th>
              <th className={styles.th}>Status</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <TransactionFetch data={data} />
          </tbody>
        </table>
      )}
      <div className={styles.pagination}>
        <div className={styles.pagination_left}>
          <div className={styles.show}>Show</div>
          <input
            className={styles.input}
            type='number'
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
            }}
          />
          <div className={styles.record}>Records</div>
        </div>
        <div className={styles.pagination_right}>
          <button onClick={() => setPage(1)} disabled={page === 1}>
            First
          </button>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            <Image src='/chevron-left.png' alt='icon' width={10} height={10} />
          </button>
          <div>Page {page}</div>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}
          >
            <Image src='/chevron-right.png' alt='icon' width={10} height={10} />
          </button>
          <button
            onClick={() => setPage(lastPage)}
            disabled={page === lastPage}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
