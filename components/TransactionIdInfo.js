import React from 'react';
import Image from 'next/image';
import moment from 'moment';

import styles from './transactionIdInfo.module.scss';
import { chainNames, renderChain } from '../utils/functions';

const TransactionIdInfo = ({ data }) => {
  return (
    <div className={styles.container}>
      {!data && (
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>
          No data Found
        </div>
      )}

      {data && (
        <>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Transaction Hash:</div>
            <div className={styles.info_right}>
              <span className={styles.blue}>{data.transaction_id}</span>
              <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Status:</div>
            <div className={styles.info_right}>
              {data.status === 'registered' &&
              data.pair_transaction.status === 'Validated' ? (
                <>
                  <Image
                    src='/check-circle.png'
                    alt='Copy Icon'
                    width={16}
                    height={16}
                  />
                  <span className={styles.green}>Success</span>
                </>
              ) : (
                <div style={{ color: '#449DD1' }}>Pending</div>
              )}
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Source Chain:</div>
            <div className={styles.info_right}>
              {renderChain(data.chain_id)}
              <span>{chainNames(data.chain_id)}</span>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Destiation Chain:</div>
            <div className={styles.info_right}>
              {renderChain(data.interfacing_chain_id)}
              <span>{chainNames(data.interfacing_chain_id)}</span>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>From:</div>
            <div className={styles.info_right}>
              <span className={styles.blue}>{data.sender || 'Null'}</span>
              <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>To:</div>
            <div className={styles.info_right}>
              <span className={styles.blue}>{data.reciever}</span>
              <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Date & Time:</div>
            <div className={styles.info_right}>
              <span>
                {' '}
                {moment(data.updated_at).startOf('hour').fromNow()} (
                {moment(data.updated_at).format('MMMM-Do-YYYY,  h:mm:ss a')})
              </span>
              <Image src='/copy.png' alt='Copy Icon' width={16} height={16} />
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Asset:</div>
            <div className={styles.info_right}>
              <Image
                src='/dollars.png'
                alt='Copy Icon'
                width={32}
                height={32}
              />
              <span>USDC</span>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Value sent:</div>
            <div className={styles.info_right}>
              <span>{data.amount}</span>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Value Received:</div>
            <div className={styles.info_right}>
              <span>{data.pair_transaction.amount}</span>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>Fee</div>
            <div className={styles.info_right}>
              <span>5 USDC ~ 0.00153191 ETH (20 BRG)</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionIdInfo;
