import React from 'react'
import { GoArrowRight } from "react-icons/go";


const RoundedButton = (params : {onClick : () => void}) => {
  return (
    <div 
    onClick={params.onClick}
    className='w-[190px] h-[60px] relative rounded-full overflow-hidden group/rb cursor-pointer'>
      <div className='w-full h-full bg-neutral-900 absolute'/>
      <div className='bg-amber-500 w-full h-full absolute group-hover/rb:w-[60px] group-hover/rb:rounded-full duration-500 right-0'/>
      <div className='w-full h-full absolute flex items-center justify-center'>
        <p className='font-bold text-[20px] text-white group-hover/rb:text-amber-500 duration-500 w-[70%] h-full flex items-center pl-3 '>
            Registrarme
        </p>
        <div className='h-full flex items-center jusitfy-center w-full text-white ml-4'>
            <GoArrowRight />
        </div>
      </div>
    </div>
  )
}

export default RoundedButton
