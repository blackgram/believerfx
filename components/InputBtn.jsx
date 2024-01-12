import React from 'react'

const InputBtn = (props) => {
  return (
    <div>
        <input type='text' placeholder={props.placeholder} className='bg-black' />
    </div>
  )
}

export default InputBtn