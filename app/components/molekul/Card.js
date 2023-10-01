import React, { Children } from "react"

const Card = ({ title, children }) => {
  return (
    <div className="flex flex-col border border-dashed rounded-xl w-72 h-72 bg-eight">
      <div className="flex items-center justify-center h-2/5">
        <p className="text-2xl font-medium">{title}</p>
      </div>
      <div className="flex items-center justify-center h-3/5">{children}</div>
    </div>
  )
}

export default Card
