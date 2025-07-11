import React from 'react'
import { User } from '../../../types/user'

const SearchBar = (params: { users: User[], setNewUsers: React.Dispatch<React.SetStateAction<User[]>> }) => {

    const filterData = (s: any) => {
        if (!s) {
            params.setNewUsers(params.users)
            return
        }

        const filtered = params.users.filter(u => u.nombre.includes(s) || u.correo.includes(s))
        params.setNewUsers(filtered)
    }

    return (
        <input
            onInput={(e) => filterData(e.target.value)}
            type="text"
            placeholder='Bucar Nombre o Correo'
            className='
        w-[70%]
        h-[50px] 
        bg-neutral-1 
        px-5 
        absolute 
        top-[8%] 
        rounded-[7px]
        z-2 outline-none bg-[#00000034]
        placeholder-neutral-600
        '/>
    )
}

export default SearchBar
