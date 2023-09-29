import React from "react"
import Logo from "../atom/Logo"
import { CgMenuGridO } from "react-icons/cg"
import { FiPlus } from "react-icons/fi"
import PlusButton from "../atom/PlusButton"

const SideList = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen bg-third">
      <Logo />
      <CgMenuGridO className="text-6xl hover:cursor-pointer" />
      <PlusButton />
    </div>
  )
}

export default SideList
