import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import TransactionTable from '../../components/TransactionTable';
import { setTabState } from '../../redux/app';

import styles from '../../styles/Home.module.scss';
import { useGetAllTransactions } from '../../utils/api';

const Transactions = () => {
  const dispatch = useDispatch();
  const { tabState, structuredData } = useSelector((state) => state.app);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { allTransactions, isLoadingAllTransactions, refreshAllTransactions } =
    useGetAllTransactions(page, limit);

  let data = tabState ? structuredData.success : structuredData.pending;

  return (
    <div>
      <Navbar />
      <div style={{ padding: '24px 50px 50px 50px' }}>
        {isLoadingAllTransactions ? (
          <Skeleton
            style={{ height: '3rem', marginTop: '4rem' }}
            baseColor='#000e48'
            highlightColor='#02061d'
            duration={1}
          />
        ) : (
          <SearchBar />
        )}

        {isLoadingAllTransactions ? (
          <Skeleton
            style={{ height: '3rem', marginTop: '4rem' }}
            baseColor='#000e48'
            highlightColor='#02061d'
            duration={1}
          />
        ) : (
          <div className={styles.tab_wrapper}>
            <div
              onClick={() => dispatch(setTabState(true))}
              className={tabState && styles.tab}
            >
              Latest Transactions
            </div>
            <div
              onClick={() => dispatch(setTabState(false))}
              className={!tabState && styles.tab}
            >
              Pending Transactions
            </div>
          </div>
        )}

        <TransactionTable
          data={data}
          lastPage={allTransactions?.transactions?.last_page}
          isLoading={isLoadingAllTransactions}
          page={page}
          limit={limit}
          setPage={setPage}
          setLimit={setLimit}
        />
        {/* {allTransactions && <></>} */}
      </div>
    </div>
  );
};

export default Transactions;
