export const editUser = async (usuario) => {
  const res = await fetch(`http://localhost:4000/api/users/${usuario.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  });

  if (!res.ok) {
    throw new Error('Error al actualizar el usuario');
  }

  const updatedUser = await res.json();
  return updatedUser;
};
