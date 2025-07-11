"use client"
import Button from '@/components/buttons/Button'
import GeneralInput from '@/components/inputs/GeneralInput'
import Navbar from '@/components/navbar/Navbar'
import Background from '@/components/utils/Background'
import React, { useState } from 'react'
import {addNewUser} from '../../../Controllers/putControllers'
 
const page = () => {
  const [user, setUser] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    fechaNacimiento: ''
  })

  const handleSetNombre = (s : string) => {
    user.nombre = s
    setUser(user)
  }

  const handleSetTelefono = (s : string) => {
    user.telefono = s
    setUser(user)
  }

    const handleSetCorreo= (s : string) => {
    user.correo= s
    setUser(user)
  }

    const handleSetfechaNacimiento = (s : string) => {
    user.fechaNacimiento = s
    setUser(user)
  }

  const handleSubmit = async () => {
    if(
      !user.nombre ||
      !user.correo ||
      !user.telefono ||
      !user.fechaNacimiento
    ){
      alert('Ingresa toda la información')
      return
    }

    try{
      await addNewUser(user)
      alert('Usuario añadido correctamente.')
    }catch(e){
      alert('Error en proceso.')
    }
  }

  return (
    <div className='w-full min-h-[100dvh] flex relative items-center justify-center bg-amber-100'>
      <Navbar active={1}></Navbar>
      <Background />

      <div className='w-[70%] h-[70%] bg-white shadow-xl rounded-[1rem] absolute backdrop-blur-3xl flex flex-col max-h-[600px] overflow-hidden'>

        <h3 className='font-bold w-full h-[20%] text-center py-5 text-[35px]'>
          ¡Únete al <span className='underline decoration-pink-500'>Equipo</span>!
        </h3>

        <div className='flex flex-col items-center justify-evenly w-full h-full'>


          <GeneralInput
          onInput={handleSetNombre}
          placeholder='Nombre completo'
            type='text'
          />

          <GeneralInput
          onInput={handleSetCorreo}
          placeholder='Email'
            type='email'
          />

          <GeneralInput
          onInput={handleSetTelefono}
          placeholder='Número telefónico'
            type='number'
          />

          <GeneralInput
          onInput={handleSetfechaNacimiento}
          placeholder='fecha'
            type='date'
          />

        </div>

        <div className='w-full h-[20%] flex items-center justify-center gap-5'>
          <Button
          text='Inscribirme'
          onClick={() => handleSubmit()}
          />
        </div>

        <div className='w-[350px] bg-amber-400 absolute -left-16 aspect-square rounded-full -top-16 -z-1' />

        <div className='w-[250px] bg-amber-400 absolute -right-16 aspect-square rounded-full -bottom-16 -z-1' />

      </div>

    </div>
  )
}

export default page
