import React from 'react';
import Image from 'next/image';
import styles from './transactionTable.module.scss';
import { useRouter } from 'next/router';

const TransactionTable = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, item) => (
            <tr
              className={styles.tr}
              key={item}
              onClick={() => router.push('/transactions/2')}
              style={{ cursor: 'pointer' }}
            >
              <td className={styles.td}>
                <div>
                  <span>0xbe1...0d589</span>
                  <Image src='/copy.png' alt='icon' width={16} height={16} />
                </div>
              </td>
              <td className={styles.td}>NFT</td>
              <td className={styles.td}>
                <div>
                  <span>BSC Mainnet</span>
                  <span>0x8f0...be7</span>
                </div>
              </td>
              <td className={styles.td}>
                <div>
                  <span>BSC Mainnet</span>
                  <span>0x8f0...be7</span>
                </div>
              </td>
              <td className={styles.td}>1 min 11s ago</td>
              <td className={styles.td}>
                <div>
                  <Image
                    src='/check-circle.png'
                    alt='icon'
                    width={16}
                    height={16}
                  />
                  <span>Success</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <div className={styles.pagination_left}>
          <div className={styles.show}>Show</div>
          <input className={styles.input} type='number' value={10} />
          <div className={styles.record}>Records</div>
        </div>
        <div className={styles.pagination_right}>
          <button>First</button>
          <button>
            <Image src='/chevron-left.png' alt='icon' width={10} height={10} />
          </button>
          <div>Page 1</div>
          <button>
            <Image src='/chevron-right.png' alt='icon' width={10} height={10} />
          </button>
          <button>Last</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
