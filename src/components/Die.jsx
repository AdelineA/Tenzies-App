import React from 'react'

export default function Die(props) {
  return (
    <div className='w-12 h-12 box-border border-2 flex justify-center items-center cursor-pointer bg-white'>
        <h2 className='text-xl'>{props.value}</h2>
    </div>
  )
}
