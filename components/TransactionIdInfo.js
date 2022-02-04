import React from 'react';
import Image from 'next/image';

import styles from './transactionIdInfo.module.scss';

const TransactionIdInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Transaction Hash:</div>
        <div className={styles.info_right}>
          <span className={styles.blue}>
            0x03ccfb36770188631e6ebf99ec11de2004d2c19b204aea789d6ac67676fd58d5
          </span>
          <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Status:</div>
        <div className={styles.info_right}>
          <Image
            src='/check-circle.png'
            alt='Copy Icon'
            width={16}
            height={16}
          />
          <span className={styles.green}>Success</span>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Source Chain Hash:</div>
        <div className={styles.info_right}>
          <span className={styles.blue}>
            0x03ccfb36770188631e6ebf99ec11de2004d2c19b204aea789d6ac67676fd58d5
          </span>
          <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Destination Chain Hash:</div>
        <div className={styles.info_right}>
          <span className={styles.blue}>
            0x03ccfb36770188631e6ebf99ec11de2004d2c19b204aea789d6ac67676fd58d5
          </span>
          <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Source Chain:</div>
        <div className={styles.info_right}>
          <Image src='/ellipse.png' alt='Copy Icon' width={32} height={32} />
          <span>Polygon</span>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Destiation Chain:</div>
        <div className={styles.info_right}>
          <Image src='/ellipse2.png' alt='Copy Icon' width={32} height={32} />
          <span>Avalanche</span>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>From:</div>
        <div className={styles.info_right}>
          <span className={styles.blue}>
            0x03ccfb36770188631e6ebf99ec11de2004d2c19b204aea789d6ac67676fd58d5
          </span>
          <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>To:</div>
        <div className={styles.info_right}>
          <span className={styles.blue}>
            0x03ccfb36770188631e6ebf99ec11de2004d2c19b204aea789d6ac67676fd58d5
          </span>
          <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Date & Time:</div>
        <div className={styles.info_right}>
          <span> 49 secs ago (Jan-07-2022 09:12:22 AM +UTC)</span>
          <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Asset:</div>
        <div className={styles.info_right}>
          <Image src='/dollars.png' alt='Copy Icon' width={32} height={32} />
          <span>USDC</span>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Value sent:</div>
        <div className={styles.info_right}>
          <span>1,000</span>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Value Received:</div>
        <div className={styles.info_right}>
          <span>995</span>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.info_left}>Fee</div>
        <div className={styles.info_right}>
          <span>5 USDC ~ 0.00153191 ETH (20 BRG)</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionIdInfo;
