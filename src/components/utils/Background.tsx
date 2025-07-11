import React from 'react'

const Background = () => {
    return (
        <div className="relative w-full min-h-[100dvh] overflow-hidden blur-3xl">
            <div className="aspect-square bg-red-200 h-[20%] rounded-full right-[2%] top-[2%] absolute z-1" />
            <div className="aspect-square bg-yellow-200 h-[50%] rounded-full absolute z-2 right-[2%] bottom-[10%]" />
            <div className="aspect-square bg-blue-200 h-[75%] rounded-full absolute right-[20%] z-0" />
        </div>
    )
}

export default Background
