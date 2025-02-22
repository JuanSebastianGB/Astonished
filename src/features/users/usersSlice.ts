import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface

export type User = {
  id: string;
  name: string;
  reaction: string;
};

export interface UsersState {
  users: { [id: string]: User };
}

// Initial State

const initialState: UsersState = {
  users: {
    1: { id: '1', name: 'Emma', reaction: 'ShockaLad!' },
    2: { id: '2', name: 'Liam', reaction: 'Mind = Blown!' },
    3: { id: '3', name: 'Olivia', reaction: 'Whaaat?!' },
    4: { id: '4', name: 'Noah', reaction: 'Unbelievable!' },
  },
};

// Slice

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    receivedUsers: (state, action: PayloadAction<User[]>) => {
      const users = action.payload;
      users.forEach((user) => {
        state.users[user.id] = user;
      });
    },
  },
});

export default usersSlice.reducer;
