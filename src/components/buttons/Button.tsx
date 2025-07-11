import React from 'react'

const Button = (params : {onClick : () => void, text : string}) => {
  return (
    <button
    onClick={params.onClick}
    className='min-w-[180px] h-[50px] text-[20px] bg-amber-500 rounded-full hover:bg-gradient-to-r font-semibold from-fuchsia-700 to-indigo-700 hover:text-white duration-500 px-5'>
      {params.text}
    </button>
  )
}

export default Button
