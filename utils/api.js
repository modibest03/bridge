import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { setPage, setStructured } from '../redux/app';

const API = axios.create({
  baseURL: process.env.URL,
});

const fetcher = (url) => API.get(url).then((res) => res.data);

export const useGetAllTransactions = (page, limit) => {
  const dispatch = useDispatch();
  const { data, error, mutate } = useSWR(
    [
      `/transaction/get_outgoing_transaction/4/${limit || 10}?page=${page}`,
      limit,
      page,
    ],
    fetcher
  );

  useEffect(() => {
    let newData = { success: [], pending: [] };

    if (data) {
      for (let i = 0; i < data.transactions.data.length; i++) {
        if (
          data.transactions.data[i].status === 'registered' &&
          data.transactions.data[i].pair_transaction.status === 'Validated'
        ) {
          newData.success = [...newData.success, data.transactions.data[i]];
        } else {
          newData.pending = [...newData.pending, data.transactions.data[i]];
        }
      }

      dispatch(setPage(data.transactions.current_page));
      dispatch(setStructured(newData));
    }
  }, [data, dispatch, page, limit]);

  return {
    allTransactions: data,
    isLoadingAllTransactions: !error && !data,
    isErrorAllTransactions: error,
    refreshAllTransactions: mutate,
  };
};

export const useGetTransactionById = (id) => {
  const { data, error, mutate } = useSWR(
    [`/transaction/search_outgoing_transaction_byid/4/${id}`, id],
    fetcher
  );

  return {
    transactionById: data,
    isLoadingTransactionById: !error && !data,
    isErrorTransactionById: error,
    refreshTransactionById: mutate,
  };
};

export const useSearchTransactionById = (id) => {
  const { data, error, mutate } = useSWR(
    [`/transaction/search_transaction_by_id/${id}`, id],
    fetcher
  );

  return {
    transactionById: data,
    isLoadingTransactionById: !error && !data,
    isErrorTransactionById: error,
    refreshTransactionById: mutate,
  };
};

export const useGetTransactionByAccount = (id, page, limit) => {
  const { data, error, mutate } = useSWR(
    [
      `/transaction/search_outgoing_transaction_byaccount/4/${id}/${limit}?page=${page}`,
      id,
      limit,
      page,
    ],
    fetcher
  );

  useEffect(() => {
    return;
  }, [data, page, limit]);

  return {
    transactionByAccount: data,
    isLoadingTransactionByAccount: !error && !data,
    isErrorTransactionByAccount: error,
    refreshTransactionByAccount: mutate,
  };
};

export const useGetTransactionByToken = (id) => {
  const { data, error, mutate } = useSWR(
    [`/transaction/get_outgoing_transaction_byaccount/4/${id}`, id],
    fetcher
  );

  return {
    transactionByToken: data,
    isLoadingTransactionByToken: !error && !data,
    isErrorTransactionByToken: error,
    refreshTransactionByToken: mutate,
  };
};
