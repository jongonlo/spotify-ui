import React from 'react'

interface SeparatorProps{
  orientation: string;
}

export const Separator = ({orientation}: SeparatorProps) => {
  return (
    <>
    {orientation == 'h' ? <div className="border-t border-gray-300 w-full"></div> : <div className="border-l border-gray-300 h-auto mx-4"></div>}
    </>
  )
}
