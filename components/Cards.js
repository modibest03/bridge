import React from 'react';
import Image from 'next/image';

import styles from './cards.module.scss';

const Cards = ({ total }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src='/total.png' alt='Icon' width={40} height={40} />
        <div className={styles.card_text}>
          <div className={styles.card_text_first}>Total Transactions</div>
          <div className={styles.card_text_last}>{total}</div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src='/file.png' alt='Icon' width={40} height={40} />
        <div className={styles.card_text}>
          <div className={styles.card_text_first}>Pending Transactions</div>
          <div className={styles.card_text_last}>8</div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src='/tag.png' alt='Icon' width={40} height={40} />
        <div className={styles.card_text}>
          <div className={styles.card_text_first}>BRG Price</div>
          <div className={styles.card_text_last}>
            <div>254,107</div>
            <div>
              <span>+2.11%</span>
              <Image src='/arrow.png' alt='Icon' width={20.02} height={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
