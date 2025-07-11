"use client"
import UserCard from '@/components/cards/UserCard'
import Navbar from '@/components/navbar/Navbar'
import Background from '@/components/utils/Background'
import React, { useEffect, useState } from 'react'
import { User } from '../../../types/user'
import SearchBar from '@/components/inputs/SearchBar'
import { getUsers } from '../../../Controllers/getControllers'
import { deleteUser } from '../../../Controllers/deleteControllers'
import EditModal from '@/components/Modals/EditModal'

const page = () => {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])

  const [edit, setEdit] = useState(false)
  const [editUser, setEditUser] = useState<User>()

  const fetchData = async () => {
    const data = await getUsers()
    setUsers(data)
    setFilteredUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDeleteUser = async (id: number) => {
    try {
      await deleteUser(id)
      alert('Eliminado correctamente')
      fetchData()
    } catch (e) {
      alert('Error en proceso de eliminación.')
    }

  }

  const handleEditUser = async (user : User) => {
    setEdit(true)
    setEditUser(user)
  }

  return (
    <div className='w-full min-h-[100dvh] flex relative items-center justify-center bg-amber-100 overflow-y-auto '>
      <Navbar active={2}></Navbar>
      <Background />
      {
        edit && 
        <EditModal
        fetch={fetchData}
        user={editUser}
        setEdit={setEdit}
        />
      }

      {
        users.length !== 0 &&
        <SearchBar
          users={users}
          setNewUsers={setFilteredUsers}
        />
      }

      <div className='pt-[10%] px-[5%] w-full h-full absolute flex gap-5 flex-wrap justify-center'>
        {
          filteredUsers.map((u) => (
            <UserCard
              deleteUser={handleDeleteUser}
              editUser={handleEditUser}
              key={u.id}
              user={u}
            />
          ))
        }
      </div>
    </div>
  )
}

export default page
