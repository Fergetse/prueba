import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = (params : {active : number}) => {
    const router = useRouter()
    const pages = [
        {
            id: 0,
            name: 'Inicio',
            url: '/'
        },
        {
            id: 1,
            name: 'Registro',
            url: '/register'
        },
        {
            id: 2,
            name: 'Edición',
            url: '/table'
        },
    ]
    const handleSelectedPage = (id: number) => {
        router.push(pages[id].url)
    }
  return (
    <div className='
    
    w-full top-0 lef-0 bg-[#0000000c] h-[50px] backdrop-blur-3xl flex items-center justify-center gap-[15%] z-1000 fixed'>
        {
            pages.map(({id, name, url}) => (
                <button
                onClick={() => handleSelectedPage(id)}
                className={`${params.active === id ? 'font-bold' : ''} cursor-pointer`} 
                key={id}>
                    {name}
                </button>
            ))
        }
    </div>
  )
}

export default Navbar
