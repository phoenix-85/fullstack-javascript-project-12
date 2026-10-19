export const useRegister = () => async (token: object) => {
  const response = await fetch('/api/v1/signup', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
