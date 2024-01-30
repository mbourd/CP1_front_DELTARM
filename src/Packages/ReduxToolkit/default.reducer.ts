import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const messageSlice = createSlice({
  name: 'default',
  initialState,
  reducers: {},
});

const { reducer } = messageSlice;
export default reducer;
