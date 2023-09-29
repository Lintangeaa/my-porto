import React from "react"
import Aside from "../molekul/Aside"
import Side from "./Side"

const Layout = ({ children }) => {
  return (
    <main className="flex">
      <div className="w-1/12 bg-red-200">
        <Side />
      </div>
      <div className="flex w-11/12">{children}</div>
    </main>
  )
}

export default Layout
