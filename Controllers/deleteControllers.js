export const deleteUser = async (id) => {
  const res = await fetch(`http://localhost:4000/api/users/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Error al eliminar el usuario');
  }
};
