export const getUsers = async () => {
    const info = await fetch('http://localhost:4000/api/users')
        .then(res => res.json())
        .catch(err => console.log('Error de carga'))
    return info
}