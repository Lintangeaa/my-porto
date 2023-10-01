import React from "react"

import { FiPlus } from "react-icons/fi"

const PlusButton = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-52">
      <div className="z-10 flex items-center justify-center w-16 h-16 transition-transform duration-300 border-2 border-white rounded-full cursor-pointer bg-primary hover:bg-opacity-80 hover:scale-105">
        <FiPlus className="text-3xl font-semibold text-black" />
      </div>
      <div className="absolute bg-white rounded-full w-28 h-28 top-12 opacity-30 animate-pulse-transparent-bg"></div>
    </div>
  )
}

export default PlusButton
