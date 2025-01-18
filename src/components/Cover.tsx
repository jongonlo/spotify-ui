import React from 'react'

interface CoverProps{
  url?: string;
}

export const Cover = ({url}: CoverProps) => {
  return (
    <div className='w-full'>
      <span className='text-lg font-semibold'>Cover Image</span>
    </div>
  )
}
