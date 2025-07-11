import React, { useState } from 'react'
import GeneralInput from '../inputs/GeneralInput'
import Button from '../buttons/Button'
import { User } from '../../../types/user'
import { editUser } from '../../../Controllers/editControllers'

const EditModal = (params: { user: User | undefined, setEdit: React.Dispatch<React.SetStateAction<boolean>>, fetch: () => void }) => {

    if (!params.user)
        return

    const [u, setU] = useState<User>(params.user)

    const handleSetNombre = (s: string) => {
        u.nombre = s
        setU(u)
    }
    const handleSetCorreo = (s: string) => {
        u.correo = s
        setU(u)
    }
    const handleSetTelefono = (s: string) => {
        u.telefono = s
        setU(u)
    }
    const handleSetfechaNacimiento = (s: string) => {
        u.fechaNacimiento = s
        setU(u)
    }
    const handleEdit = async () => {
        try {
            await editUser(u)
            alert('Edición correcta')
            params.fetch()
            handleClose()
        } catch (e) {
            alert('Error en edición.')
        }
    }
    const handleClose = () => {
        params.setEdit(false)
    }

    return (
        <div className='absolute w-full h-full backdrop-blur-2xl bg-[#0000009a] z-2000 flex items-center justify-center'>

            <div className='w-[70%] h-[70%] bg-white shadow-xl rounded-[1rem] absolute backdrop-blur-3xl flex flex-col max-h-[600px] overflow-hidden'>


                <div className='flex flex-col items-center justify-evenly w-full h-full'>


                    <GeneralInput
                        onInput={handleSetNombre}
                        placeholder={`${params.user?.nombre}`}
                        type='text'
                    />

                    <GeneralInput
                        onInput={handleSetCorreo}
                        placeholder={`${params.user?.correo}`}
                        type='email'
                    />

                    <GeneralInput
                        onInput={handleSetTelefono}
                        placeholder={`${params.user?.telefono}`}
                        type='number'
                    />

                    <GeneralInput
                        onInput={handleSetfechaNacimiento}
                        placeholder={`${params.user?.fechaNacimiento}`}
                        type='date'
                    />

                </div>

                <div className='w-full h-[20%] flex items-center justify-center gap-5'>
                    <Button
                        text={'Cancelar'}
                        onClick={() => handleClose()}
                    />

                    <Button
                        text={'Guardar cambios'}
                        onClick={() => handleEdit()}
                    />

                </div>

            </div>

        </div>
    )
}

export default EditModal
