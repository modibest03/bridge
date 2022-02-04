import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './history.module.scss';

const History = ({ name, data }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{name}</h4>

      <ul className={styles.lists}>
        {data.map((data, index) => (
          <li key={index} className={styles.list}>
            <div className={styles.image}>
              <Image src='/dollars.png' alt='Icon' width={30} height={30} />
            </div>
            <div className={styles.ellipse}>
              <div>From</div>
              <Image src='/ellipse.png' alt='Icon' width={30} height={30} />
              <div>
                <span>0x8f0</span>...<span>be7</span>
              </div>
            </div>
            <div className={styles.ellipse}>
              <div>From</div>
              <Image src='/ellipse2.png' alt='Icon' width={30} height={30} />
              <div>
                <span>0x8f0</span>...<span>be7</span>
              </div>
            </div>
            <div className={styles.usd}>20 USDC</div>
          </li>
        ))}
      </ul>
      <div className={styles.link}>
        <Link href='/transactions'>
          <a>View All Transactions</a>
        </Link>
      </div>
    </div>
  );
};

export default History;
