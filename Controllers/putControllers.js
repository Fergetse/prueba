export const addNewUser = async (usuario) => {
  const res = await fetch('http://localhost:4000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });

  if (!res.ok) {
    throw new Error('Error al crear el usuario');
  }

  const newUser = await res.json();
  return newUser;
};
