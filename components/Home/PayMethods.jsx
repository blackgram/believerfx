import React from 'react'
import Image from 'next/image'
import btc from '../../assets/bitcoin.png'
import ltc from '../../assets/litecoin.png'
import eth from '../../assets/ethereum.png'

const PayMethods = () => {
  return (
    <div className='bg-[url("../assets/forex.jpg")] bg-cover bg-fixed bg-center bg-no-repeat text-white flex flex-col items-center justify-center p-4 pt-7 lg:min-h-[70vh] lg:pb-6'>
        <div className='font-bold text-[24px]'>WE ACCEPT</div>
        <div>Payment methods for deposit and withdrawals</div>
        <div className='flex flex-wrap'>
            <Image src={btc} height={125} width={320} alt='bitcoin' />
            <Image src={ltc} height={125} width={320}  alt='litecoin'/>
            <Image src={eth} height={125} width={320}  alt='ethereum'/>
        </div>
    </div>
  )
}

export default PayMethods