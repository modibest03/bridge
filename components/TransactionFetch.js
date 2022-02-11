import React from 'react';
import { chainNames } from '../utils/functions';
import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './transactionTable.module.scss';

const TransactionFetch = ({ data }) => {
  const router = useRouter();
  // const [text, setText] = useState('');

  return (
    <>
      {data?.map((obj, item) => (
        <tr
          className={styles.tr}
          key={item}
          onClick={() => router.push(`/transactions/${obj.transaction_id}`)}
          style={{ cursor: 'pointer' }}
        >
          <td className={styles.td}>
            <div>
              <span>
                {obj?.pair_transaction?.transaction_id.substr(0, 6)}...
                {obj?.pair_transaction?.transaction_id.substr(
                  obj?.pair_transaction?.transaction_id?.length - 5
                )}
              </span>
              <div onClick={(e) => e.stopPropagation()}>
                <CopyToClipboard text={obj?.transaction_id}>
                  <Image src='/copy.png' alt='icon' width={16} height={16} />
                </CopyToClipboard>
              </div>
            </div>
          </td>
          <td className={styles.td}>NFT</td>
          <td className={styles.td}>
            <div>
              <span>{chainNames(obj.chain_id)}</span>
              {!obj?.sender && <span>null</span>}
              {obj?.sender && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/${obj?.sender}`);
                  }}
                >
                  {obj?.sender?.substr(0, 6)}...
                  {obj?.sender?.substr(obj.sender?.length - 3)}
                </span>
              )}
            </div>
          </td>
          <td className={styles.td}>
            <div>
              <span>{chainNames(obj.interfacing_chain_id)}</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/${obj.reciever}`);
                }}
              >
                {obj.reciever.substr(0, 6)}...
                {obj.reciever.substr(obj.reciever.length - 3)}
              </span>
            </div>
          </td>
          <td className={styles.td}>
            {moment(obj.updated_at).startOf('hour').fromNow()}
          </td>
          <td className={styles.td}>
            <div>
              {obj.status === 'registered' &&
              obj.pair_transaction.status === 'Validated' ? (
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
          </td>
        </tr>
      ))}
    </>
  );
};

export default TransactionFetch;
