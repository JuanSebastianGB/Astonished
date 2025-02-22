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
  users: {},
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
    addNewUser: (
      state,
      action: PayloadAction<Pick<User, 'name' | 'reaction'>>
    ) => {
      const id = '' + Date.now();
      state.users[id] = { id, ...action.payload };
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.users[action.payload.id] = action.payload;
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      delete state.users[action.payload];
    },
  },
});

export const { receivedUsers, addNewUser, removeUser, updateUser } =
  usersSlice.actions;

export default usersSlice.reducer;
