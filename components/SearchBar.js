import React from 'react';
import Image from 'next/image';

import styles from './searchbar.module.scss';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className={styles.container}>
      <input
        placeholder='Search for blocks, accounts, transactions, and tokens'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Image src='/search.png' alt='search icon' width={16} height={16} />
    </div>
  );
};

export default SearchBar;
