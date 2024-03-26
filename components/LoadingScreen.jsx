import React from 'react'
import { DotLoader } from 'react-spinners'

const LoadingScreen = () => {
  return (
    <div className='w-full min-h-screen bg-black flex items-center justify-center'>
        <DotLoader size={150} className='bg-primary text-black p-8' />
    </div>
  )
}

export default LoadingScreen