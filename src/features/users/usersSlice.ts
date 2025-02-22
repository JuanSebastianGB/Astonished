import { createSlice } from '@reduxjs/toolkit';

// interface

type User = {
  id: string;
  name: string;
};

export interface UsersState {
  users: { [id: string]: User };
}

// Initial State

const initialState: UsersState = {
  users: {
    '1': { id: '1', name: 'John Doe' },
    '2': { id: '2', name: 'Jane Doe' },
  },
};

// Slice

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
