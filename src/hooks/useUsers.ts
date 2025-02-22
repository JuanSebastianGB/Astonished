import { useEffect } from 'react';
import { getUsers } from '../app/api';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { receivedUsers } from '../features/users/usersSlice';

export const useUsers = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  useEffect(() => {
    getUsers()
      .then((response) => dispatch(receivedUsers(response)))
      .catch(console.error);
  }, []);

  return { users };
};
