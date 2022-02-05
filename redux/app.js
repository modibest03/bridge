import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  limit: 10,
  structuredData: {},
  tabState: true,
  // transactionId: null,
};

export const appLocalData = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setStructured: (state, action) => {
      state.structuredData = action.payload;
    },
    setTabState: (state, action) => {
      state.tabState = action.payload;
    },
    setTransactionId: (state, action) => {
      state.transactionId = action.payload;
    },
  },
});

export const { setPage, setLimit, setStructured, setTabState } =
  appLocalData.actions;

export default appLocalData.reducer;
