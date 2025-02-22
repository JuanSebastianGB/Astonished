import { useEffect, useState } from 'react';
import styles from './UsersList.module.css';
import { getUsers } from '../../app/api';
import { User } from './usersSlice';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', reaction: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({ name: '', reaction: '' });

  // CREATE
  const handleAddUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUser.name && newUser.reaction) {
      setUsers([
        ...users,
        {
          id: '' + Date.now(),
          name: newUser.name,
          reaction: newUser.reaction,
        },
      ]);
      setNewUser({ name: '', reaction: '' });
    }
  };

  // UPDATE
  const handleEdit = (user: User) => {
    setEditingId(user.id);
    setEditValues({ name: user.name, reaction: user.reaction });
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...editValues } : user))
    );
    setEditingId(null);
    setEditValues({ name: '', reaction: '' });
  };

  // DELETE
  const handleDelete = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response))
      .catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Astonished Users 😲</h1>

      {/* Create Form */}
      <form onSubmit={handleAddUser} className={styles.addForm}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Reaction"
          value={newUser.reaction}
          onChange={(e) => setNewUser({ ...newUser, reaction: e.target.value })}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>

      {/* Users List */}
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id} className={styles.userItem}>
            {editingId === user.id ? (
              <form
                onSubmit={(e) => handleUpdate(e, user.id)}
                className={styles.editForm}
              >
                <input
                  type="text"
                  value={editValues.name}
                  onChange={(e) =>
                    setEditValues({ ...editValues, name: e.target.value })
                  }
                  className={styles.input}
                />
                <input
                  type="text"
                  value={editValues.reaction}
                  onChange={(e) =>
                    setEditValues({ ...editValues, reaction: e.target.value })
                  }
                  className={styles.input}
                />
                <button type="submit" className={styles.button}>
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className={`${styles.button} ${styles.cancelButton}`}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <span className={styles.userName}>{user.name}</span>
                <span className={styles.reaction}>{user.reaction}</span>
                <div className={styles.actions}>
                  <button
                    onClick={() => handleEdit(user)}
                    className={styles.button}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className={`${styles.button} ${styles.deleteButton}`}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
