import React from 'react';
import Image from 'next/image';
import styles from './history.module.scss';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setTabState } from '../redux/app';
import { renderChain } from '../utils/functions';

const History = ({ name, data, transaction }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{name}</h4>

      {data?.length === 0 ? (
        <div className={styles.zero}>
          <div>0 Pending Transaction on currently fetch Data</div>
        </div>
      ) : (
        <>
          <ul className={styles.lists}>
            {data?.map((obj, index) => (
              <li
                key={index}
                className={styles.list}
                onClick={() =>
                  router.push(`/transactions/${obj.transaction_id}`)
                }
              >
                <div className={styles.image}>
                  <Image src='/dollars.png' alt='Icon' width={30} height={30} />
                </div>
                <div
                  className={styles.ellipse}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/${obj?.sender}`);
                  }}
                >
                  <div>From</div>
                  {renderChain(obj.chain_id)}
                  <div>
                    <span>{obj?.sender?.substr(0, 4)}</span>...
                    <span>{obj?.sender?.substr(obj.sender?.length - 3)}</span>
                    {/* {obj.type === 'burn' && (
                      <>
                        <span>{obj.reciever.substr(0, 6)}</span>...
                        <span>
                          {obj.reciever.substr(obj.reciever.length - 3)}
                        </span>
                      </>
                    )} */}
                    {/* {obj.type !== 'burn' && (
                      <>
                      </>
                    )} */}
                  </div>
                </div>
                <div
                  className={styles.ellipse}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/${obj.reciever}`);
                  }}
                >
                  <div>To</div>
                  {renderChain(obj.interfacing_chain_id)}
                  <div>
                    <span>{obj.reciever.substr(0, 4)}</span>...
                    <span>{obj.reciever.substr(obj.reciever.length - 3)}</span>
                  </div>
                </div>
                <div className={styles.usd}>{obj.amount} USDC</div>
              </li>
            ))}
          </ul>
          <div
            className={styles.link}
            onClick={() => {
              dispatch(setTabState(transaction));
              router.push('/transactions');
            }}
          >
            View All Transactions
          </div>
        </>
      )}
    </div>
  );
};

export default History;
