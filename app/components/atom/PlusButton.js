import React from "react"

import { FiPlus } from "react-icons/fi"

const PlusButton = () => {
  return (
    <div className="flex items-center justify-center w-20 h-20 mb-10 border-2 rounded-full hover:cursor-pointer bg-primary">
      <FiPlus className="text-3xl font-semibold" />
    </div>
  )
}

export default PlusButton
