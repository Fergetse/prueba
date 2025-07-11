import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { User } from '../../../types/user';



const UserCard = (params: { deleteUser: (id: number) => void, editUser : (user: User) => void, user : User }) => {
    return (
        <div className='w-[300px] h-[300px] bg-white rounded-[7px] relative flex flex-col overflow-hidden hover:bg-neutral-800 duration-500 group/card'>
            <div className='w-full flex justify-center relative h-[30%] bg-amber-500'>
                <div className='w-[80px] aspect-square rounded-full border-8 border-white bg-gradient-to-r from-pink-600 to-indigo-700 absolute -bottom-[40%]' />
                <div className='absolute top-2 right-2 text-white text-[25px] flex gap-2 cursor-pointer'>
                    <MdDeleteOutline 
                    onClick={() => params.deleteUser(params.user.id)}
                    className='hover:text-red-500 duration-200'/>
                    <MdOutlineEdit
                    onClick={() => params.editUser(params.user)}
                    className='hover:text-blue-500 duration-200'/>
                </div>
            </div>

            <div className='w-full h-[70%] pt-[15%] flex flex-col item-center gap-3'>
                <h4 className='text-center w-full group-hover/card:text-white duration-500 font-bold '>
                    {params.user.nombre}
                </h4>
                <p className='text-center w-full group-hover/card:text-white duration-500 '>
                    {params.user.correo}
                </p>
                <p className='text-center w-full group-hover/card:text-white duration-500 '>
                    {params.user.telefono}
                </p>
                <p className='text-center w-full group-hover/card:text-white duration-500 '>
                    {params.user.fechaNacimiento}
                </p>
            </div>
        </div>
    )
}

export default UserCard
