import React from 'react'

const GeneralInput = (params : {type:string, placeholder : string, onInput : (s: string) => void}) => {
  return (
    <input
    onInput={(e) => params.onInput(e.target.value)}
    type={`${params.type}`}
    placeholder={`${params.placeholder}`}
          className='w-[70%] bg-gray-100 placeholder-neutral-500 outline-none h-[50px] rounded-[5px] px-5' />
  )
}

export default GeneralInput
