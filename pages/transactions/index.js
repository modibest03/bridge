import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import TransactionTable from '../../components/TransactionTable';

import styles from '../../styles/Home.module.scss';

const Transactions = () => {
  const [tabState, setTabState] = useState(true);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '24px 50px 50px 50px' }}>
        <SearchBar />
        <div className={styles.tab_wrapper}>
          <div
            onClick={() => setTabState((state) => !state)}
            className={tabState && styles.tab}
          >
            Latest Transactions
          </div>
          <div
            onClick={() => setTabState((state) => !state)}
            className={!tabState && styles.tab}
          >
            Pending Transactions
          </div>
        </div>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Transactions;
