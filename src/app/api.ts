export const getUsers = async () => {
  const response = await fetch('/users.json');
  return response.json();
};
