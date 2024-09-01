import React from 'react'

const Badge = ({children}) => {
  return (
    <div className='flex items-center justify-between max-w-[120px] font-light text-xs p-1 px-4 space-x-1 text-white border rounded-2xl border-sec'>{children}</div>
  )
}

export default Badge