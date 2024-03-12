import React from 'react'

const InputBtn = (props) => {
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange} className='bg-black border-2 border-solid border-nb3 text-[16px] text-ash p-[16px] rounded-md w-full md:w-[316px] focus:border-black focus:outline-primary focus:outline-none focus:outline-1 ' />
    </div>
  )
}

export default InputBtn