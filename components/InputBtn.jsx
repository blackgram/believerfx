import React from 'react'

const InputBtn = (props) => {
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} className='bg-black border-2 border-solid border-nb3 text-[16px] text-ash p-[16px] rounded-md w-full md:w-[316px] ' />
    </div>
  )
}

export default InputBtn