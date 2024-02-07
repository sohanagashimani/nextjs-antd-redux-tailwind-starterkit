import { Dispatch, createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1;
    },
    decrement: state => {
      state.count -= 1;
    },
  },
});

export const incrementCount = () => (dispatch: Dispatch) => {
  dispatch(counterSlice.actions.increment());
};

export const decrementCount = () => (dispatch: Dispatch) => {
  dispatch(counterSlice.actions.decrement());
};

export default counterSlice;
