import Head from 'next/head';
import Cards from '../components/Cards';
import History from '../components/History';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.scss';
import { useGetAllTransactions } from '../utils/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from 'react-redux';

export default function Home() {
  const { structuredData } = useSelector((state) => state.app);

  const { allTransactions, isLoadingAllTransactions } = useGetAllTransactions();

  console.log(allTransactions);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bridge</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <div style={{ padding: '24px 50px 50px 50px' }}>
        {isLoadingAllTransactions && (
          <Skeleton
            style={{ height: '70vh' }}
            baseColor='#000e48'
            highlightColor='#02061d'
            duration={1}
          />
        )}
        {allTransactions && (
          <>
            <SearchBar />
            <Cards total={allTransactions.transactions.total} />

            <div style={{ width: '30px', height: '30px' }}></div>

            <div
              style={{
                marginTop: '56px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <History
                name='Latest Transactions'
                data={structuredData?.success?.slice(0, 7)}
                transaction={true}
              />
              <History
                name='Pending Transactions'
                data={structuredData?.pending?.slice(0, 7)}
                transaction={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
